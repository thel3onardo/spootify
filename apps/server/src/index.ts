import fastify from "fastify";

const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

server.get("/ping", () => {
  return "pong";
});

server.listen({ port: 4000 }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info("Server listening to port 40020");
});
