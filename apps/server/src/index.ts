import fastify from "fastify";
import fastifyEnv from "@fastify/env";
import fastifyJwt from "@fastify/jwt";

import prismaPlugin from "./plugins/prisma";
import fileUpload from "fastify-file-upload";
import envConfig from "./config/env";

import trackRoutes from "./modules/track/track.route";
import authRoutes from "./modules/auth/auth.route";
import collectionRoutes from "./modules/collection/collection.route";

import { trackSchemas } from "./modules/track/track.schema";
import { authSchemas } from "./modules/auth/auth.schema";
import { collectionSchemas } from "./modules/collection/collection.schema";

const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

async function main() {
  //TODO: abstract this away, please
  for (const schema of [
    ...trackSchemas,
    ...authSchemas,
    ...collectionSchemas,
  ]) {
    server.addSchema(schema);
  }

  //plugins
  await server.register(prismaPlugin);
  await server.register(fastifyEnv, envConfig);
  server.register(fileUpload);
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
