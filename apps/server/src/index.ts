import fastify from "fastify";
import prismaPlugin from "./plugins/prisma";
import trackRoutes from "./modules/track/track.route";

const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

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

server.listen({ port: 4000 }, async (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info("Server listening to port 40020");
});
