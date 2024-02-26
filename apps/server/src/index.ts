import fastify from "fastify";
import fastifyEnv from "@fastify/env";
import fastifyJwt from "@fastify/jwt";
import fastifyCors from "@fastify/cors";
import fileUpload from "fastify-file-upload";
import fastifyCookie from "@fastify/cookie";

import { prismaPlugin } from "./plugins/prisma";
import { envConfig } from "./config/env";

import { trackSchemas } from "./modules/track/track.schema";
import { userSchemas } from "./modules/user/user.schema";
import { imageKitPlugin } from "./plugins/image-kit";
import { setupRoutes } from "./config/routes";
import { luciaPlugin } from "./plugins/lucia";
import { playlistSchemas } from "./modules/playlist/playlist.schemas";

const server = fastify({
  logger: {
    level: "debug",
    transport: {
      target: "pino-pretty",
    },
  },
});

async function main() {
  //TODO: abstract this away, pleasee
  for (const schema of [...trackSchemas, ...playlistSchemas, ...userSchemas]) {
    server.addSchema(schema);
  }

  // decorators
  server.decorate("session", null);

  await server.register(fastifyCors, {
    origin: true,
    credentials: true,
    allowedHeaders: ["Set-Cookie", "Content-Type"],
    exposedHeaders: ["Authorization"],
  });
  await server.register(prismaPlugin);
  await server.register(luciaPlugin);
  await server.register(fastifyEnv, envConfig);
  await server.register(imageKitPlugin);
  await server.register(fileUpload);
  //TODO: remove jwt
  await server.register(fastifyJwt, {
    secret: server.config.JWT_SECRET,
    sign: {
      expiresIn: "10m",
    },
  });

  //plugins
  server.register(fastifyCookie, {
    hook: "onRequest",
    parseOptions: {},
  });

  //routes
  setupRoutes(server);

  server.listen({ port: server.config.PORT || 4000 }, async (err) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
  });
}

main();
