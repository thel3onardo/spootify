import { FastifyInstance } from "fastify";
import {
  addTrackToCollection,
  createCollection,
  getColletionById,
  removeTrackFromCollectionById,
  updateCollectionById,
} from "./collection.controller";
import { $ref } from "./collection.schema";

function collectionRoutes(server: FastifyInstance) {
  server.get("/collection/:id", getColletionById);
  server.patch(
    "/collection/:id",
    { schema: { body: $ref("updateCollectionSchema") } },
    updateCollectionById,
  );
  //TODO: implement schema validation for this one.
  server.post("/collection/:collectionId/add-track", addTrackToCollection);
  server.delete(
    "/collection/:collectionID/remove-track/:trackID",
    removeTrackFromCollectionById,
  );
  server.post(
    "/collection",
    { schema: { body: $ref("createCollectionSchema") } },
    createCollection,
  );
}

export default collectionRoutes;
