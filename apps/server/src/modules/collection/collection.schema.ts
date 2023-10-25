import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createCollectionSchema = z.object({
  name: z.string(),
  bio: z.string(),
  coverImage: z.string(),
  authorId: z.number(),
});

export type CreateCollection = z.infer<typeof createCollectionSchema>;

export const { schemas: collectionSchemas, $ref } = buildJsonSchemas(
  {
    createCollectionSchema,
  },
  { $id: "collectionSchema" },
);
