import { FastifyInstance } from "fastify";
import {
  createTrack,
  deleteTrackHandler,
  testStuff,
  getTrackAudioByID,
  getTrackByID,
} from "./track.controller";
import { $ref } from "./track.schema";

async function trackRoutes(server: FastifyInstance) {
  server.post(
    "/track",
    { schema: { body: $ref("createTrackSchema") } },
    createTrack,
  );
  server.get("/track/:id", getTrackByID);
  server.get("/track/:id/audio", getTrackAudioByID);
  server.delete("/track/:id", deleteTrackHandler);

  server.get("/track/test", testStuff);
}

export default trackRoutes;
