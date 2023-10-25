import fastify from "fastify";
import fastifyEnv from "@fastify/env";

import prismaPlugin from "./plugins/prisma";
import envConfig from "./config/env";

import trackRoutes from "./modules/track/track.route";
import authRoutes from "./modules/auth/auth.route";
import { trackSchemas } from "./modules/track/track.schema";
import { authSchemas } from "./modules/auth/auth.schema";

const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

async function main() {
  for (const schema of [...trackSchemas, ...authSchemas]) {
    server.addSchema(schema);
  }

  //plugins
  await server.register(prismaPlugin);
  await server.register(fastifyEnv, envConfig);

  //routes
  server.register(
    (app, _, done) => {
      trackRoutes(app);
      authRoutes(app);

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
