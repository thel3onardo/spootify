import { FastifyPluginAsync } from "fastify";
import { initializePrisma } from "../config/prisma";
import { PrismaClient } from "@prisma/client";
import fastifyPlugin from "fastify-plugin";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

const prismaPlugin: FastifyPluginAsync = fastifyPlugin(async (server) => {
  const client = initializePrisma();

  await client.$connect();

  server.decorate("prisma", client);

  server.addHook("onClose", async (server) => {
    await server.prisma.$disconnect();
  });
});

export default prismaPlugin;
