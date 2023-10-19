import { FastifyInstance } from "fastify";
import {
  getTrackHandler,
  createTrackHandler,
  deleteTrackHandler,
} from "./track.controller";
import { $ref } from "./track.schema";

async function trackRoutes(server: FastifyInstance) {
  server.post(
    "/track/create",
    { schema: { body: $ref("createTrackSchema") } },
    createTrackHandler,
  );
  server.get("/track/:id", getTrackHandler);
  server.get("/track", getTrackHandler);
  server.delete("/track/:id", deleteTrackHandler);
}

export default trackRoutes;
