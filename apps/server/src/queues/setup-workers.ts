import { FastifyBaseLogger } from "fastify";
import { setupMailWorker } from "./mail/workers";

export const setupWorkers = (logger: FastifyBaseLogger) => {
  setupMailWorker(logger);
};
