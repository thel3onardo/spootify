import { FastifyPluginAsync } from "fastify";
import { initializePrisma } from "../config/prisma";
import fastifyPlugin from "fastify-plugin";

const prismaPlugin: FastifyPluginAsync = fastifyPlugin(async (server) => {
  const client = initializePrisma();

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
