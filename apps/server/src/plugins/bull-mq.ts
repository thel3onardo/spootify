import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { FastifyAdapter } from "@bull-board/fastify";
import { FastifyPluginAsync } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { mailQueue } from "~/queues";
import { setupWorkers } from "~/queues/setup-workers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bullMqPlugin: FastifyPluginAsync = fastifyPlugin(async (server, opts) => {
  const serverAdapter = new FastifyAdapter();

  createBullBoard({
    queues: [new BullMQAdapter(mailQueue)],
    serverAdapter,
  });

  serverAdapter.setBasePath("/ui");
  server.register(serverAdapter.registerPlugin(), {
    prefix: "/ui",
    basePath: "/",
  });

  setupWorkers(server.log);
});

export { bullMqPlugin };
