import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createCollectionSchema = z.object({
  name: z.string(),
  description: z.string(),
  coverImage: z.string(),
  authorId: z.number(),
});

const updateCollectionSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  coverImage: z.string().optional(),
});

export type CreateCollection = z.infer<typeof createCollectionSchema>;
export type UpdateCollection = z.infer<typeof updateCollectionSchema>;

export const { schemas: collectionSchemas, $ref } = buildJsonSchemas(
  {
    createCollectionSchema,
    updateCollectionSchema,
  },
  { $id: "collectionSchema" },
);
