import { FastifyInstance } from "fastify";
import { getTrackHandler } from "./track.controller";

async function trackRoutes(server: FastifyInstance) {
  server.get("/tracke", getTrackHandler);
}

export default trackRoutes;
