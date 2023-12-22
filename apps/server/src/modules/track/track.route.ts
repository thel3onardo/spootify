import { FastifyInstance } from "fastify";
import {
  createTrack,
  deleteTrackHandler,
  addTrackToCollectionById,
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
  server.get("/track/audio/:id", getTrackAudioByID);
  server.delete("/track/:id", deleteTrackHandler);
  server.post(
    "/track/collection/:collectionId",
    { schema: { body: $ref("addTrackToCollectionSchema") } },
    addTrackToCollectionById,
  );

  // server.delete(
  //   "/track/collection/:collectionId",
  //   removeTrackFromCollectionById,
  // );

  server.get("/track/test", testStuff);
}

export default trackRoutes;
