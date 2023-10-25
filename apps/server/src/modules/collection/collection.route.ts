import { FastifyInstance } from "fastify";
import { createCollection, getColletionById } from "./collection.controller";
import { $ref } from "./collection.schema";

function collectionRoutes(server: FastifyInstance) {
  server.get("/collection/:id", getColletionById);
  server.post(
    "/collection/new",
    { schema: { body: $ref("createCollectionSchema") } },
    createCollection,
  );
}

export default collectionRoutes;
