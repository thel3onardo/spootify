import { fastify } from "fastify";
import { fastifyEnv } from "@fastify/env";
import { fastifyJwt } from "@fastify/jwt";
import { fastifyCors } from "@fastify/cors";
import { fastifyCookie } from "@fastify/cookie";
import { prismaPlugin } from "./plugins/prisma";
import { envConfig } from "./config/env";
import { imageKitPlugin } from "./plugins/image-kit";
import { setupRoutes } from "./config/routes";
import { luciaPlugin } from "./plugins/lucia";
import { bullMqPlugin } from "./plugins/bull-mq";
import { setupSchemas } from "./config/schemas";

import fileUpload from "fastify-file-upload";

const server = fastify({
  logger: {
    level: "debug",
    transport: {
      target: "pino-pretty",
    },
  },
});

async function main() {
  // decorators
  server.decorate("session", null);

  // async plugins

  await server.register(fastifyEnv, envConfig);
  await server.register(fastifyCors, {
    origin: true,
    credentials: true,
    allowedHeaders: ["Set-Cookie", "Content-Type"],
    exposedHeaders: ["Authorization"],
  });
  await server.register(prismaPlugin);
  await server.register(luciaPlugin);
  await server.register(imageKitPlugin);
  await server.register(fileUpload);
  //TODO: remove jwt
  await server.register(fastifyJwt, {
    secret: server.config.JWT_SECRET,
    sign: {
      expiresIn: "10m",
    },
  });
  await server.register(bullMqPlugin);

  //plugins
  server.register(fastifyCookie, {
    hook: "onRequest",
    parseOptions: {},
  });

  //routes
  setupRoutes(server);

  //setup schemas
  setupSchemas(server);

  server.listen({ port: server.config.PORT || 4000 }, async (err) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
  });
}

main();
