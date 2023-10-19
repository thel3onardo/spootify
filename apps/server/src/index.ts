import fastify from "fastify";
import prismaPlugin from "./plugins/prisma";
import trackRoutes from "./modules/track/track.route";
import "dotenv/config";
import { trackSchemas } from "./modules/track/track.schema";

const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

async function main() {
  for (const schema of [...trackSchemas]) {
    server.addSchema(schema);
  }

  //plugins
  server.register(prismaPlugin);

  //routes
  server.register(
    (app, _, done) => {
      trackRoutes(app);

      done();
    },
    { prefix: "/api" },
  );

  server.listen({ port: Number(process.env.PORT) || 4000 }, async (err) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
    server.log.info("Server listening to port 40020");
  });
}

main();
