import { fastifyPlugin } from "fastify-plugin";
import { FastifyPluginAsync } from "fastify";
import { PrismaClient } from "@prisma/client";

const prismaPlugin: FastifyPluginAsync = fastifyPlugin(async (server) => {
  const client = new PrismaClient({ errorFormat: "pretty" });

  try {
    await client.$connect();

    server.log.info("Connected to database");

    server.decorate("prisma", client);
    server.addHook("onClose", async (server) => {
      await server.prisma.$disconnect();
    });
  } catch (err) {
    server.log.error(err);

    throw new Error("Could not connect to database");
  }
});

export { prismaPlugin };
