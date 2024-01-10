import fastify from "fastify";
import fastifyEnv from "@fastify/env";
import fastifyJwt from "@fastify/jwt";
import fastifyCors from "@fastify/cors";
import fileUpload from "fastify-file-upload";
import fastifyCookie from "@fastify/cookie";

import { prismaPlugin } from "./plugins/prisma";
import { envConfig } from "./config/env";

import trackRoutes from "./modules/track/track.route";
import authRoutes from "./modules/auth/auth.route";
import collectionRoutes from "./modules/collection/collection.route";
import userRoutes from "./modules/user/user.routes";

import { trackSchemas } from "./modules/track/track.schema";
import { authSchemas } from "./modules/auth/auth.schema";
import { collectionSchemas } from "./modules/collection/collection.schema";
import { userSchemas } from "./modules/user/user.schema";

const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

async function main() {
  //TODO: abstract this away, pleasee
  for (const schema of [
    ...trackSchemas,
    ...authSchemas,
    ...collectionSchemas,
    ...userSchemas,
  ]) {
    server.addSchema(schema);
  }

  //decorators
  server.decorate("session", null);

  //pluginsa
  server.register(fastifyCookie, {
    hook: "onRequest",
    parseOptions: {},
  });
  await server.register(prismaPlugin);
  await server.register(fastifyEnv, envConfig);
  await server.register(fastifyCors);
  server.register(fileUpload);
  //TODO: remove jwt
  server.register(fastifyJwt, {
    secret: server.config.JWT_SECRET,
    sign: {
      expiresIn: "10m",
    },
  });

  //routes
  server.register(
    (app, _, done) => {
      trackRoutes(app);
      authRoutes(app);
      collectionRoutes(app);
      userRoutes(app);

      done();
    },
    { prefix: "/api" },
  );

  server.listen({ port: server.config.PORT || 4000 }, async (err) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
  });
}

main();
