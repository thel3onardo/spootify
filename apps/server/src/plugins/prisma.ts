import { FastifyPluginAsync } from "fastify";
import { initializePrisma } from "../config/prisma";
import fastifyPlugin from "fastify-plugin";

const prismaPlugin: FastifyPluginAsync = fastifyPlugin(async (server) => {
  const client = initializePrisma();
  await client.$connect();

  server.decorate("prisma", client);

  server.addHook("onClose", async (server) => {
    await server.prisma.$disconnect();
  });
});

export { prismaPlugin };
