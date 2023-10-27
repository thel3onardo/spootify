import { FastifyInstance } from "fastify";
import {
  getTrackHandler,
  createTrack,
  deleteTrackHandler,
  addTrackToCollectionById,
} from "./track.controller";
import { $ref } from "./track.schema";

async function trackRoutes(server: FastifyInstance) {
  server.post(
    "/track",
    { schema: { body: $ref("createTrackSchema") } },
    createTrack,
  );
  server.get("/track/:id", getTrackHandler);
  server.delete("/track/:id", deleteTrackHandler);
  server.post(
    "/track/collection/:collectionId",
    { schema: { body: $ref("addTrackToCollectionSchema") } },
    addTrackToCollectionById,
  );
}

export default trackRoutes;
