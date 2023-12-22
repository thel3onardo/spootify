import { FastifyInstance } from "fastify";
import {
  createCollection,
  getColletionById,
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
  server.post(
    "/collection",
    { schema: { body: $ref("createCollectionSchema") } },
    createCollection,
  );
}

export default collectionRoutes;
