import fastify from "fastify";
import prismaPlugin from "./plugins/prisma";
import "dotenv/config";

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
  server.register(prismaPlugin);

  //routes
  server.register(
    (app, _, done) => {
      trackRoutes(app);
      authRoutes(app);

      done();
    },
    { prefix: "/api" },
  );

  server.listen({ port: Number(process.env.PORT) || 4000 }, async (err) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
  });
}

main();
