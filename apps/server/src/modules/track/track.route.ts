import { FastifyInstance } from "fastify";
import {
  createTrack,
  deleteTrackHandler,
  testStuff,
  getTrackByID,
  getTrackMetadataByID,
} from "./track.controller";
import { $ref } from "./track.schema";

async function trackRoutes(server: FastifyInstance) {
  server.post(
    "/track",
    { schema: { body: $ref("createTrackSchema") } },
    createTrack,
  );
  server.get("/track/:id", getTrackByID);
  server.get("/track/:id/metadata", getTrackMetadataByID);
  server.delete("/track/:id", deleteTrackHandler);

  server.get("/track/test", testStuff);
}

export default trackRoutes;
