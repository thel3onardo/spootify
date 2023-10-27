import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createTrackSchema = z.object({
  name: z.string(),
  coverImage: z.string(),
  authorId: z.number(),
});

const getTrackResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  author: z.any(),
});

const addTrackToCollectionSchema = z.object({
  trackId: z.number(),
});

const removeTrackFromCollectionSchema = z.object({
  trackId: z.number(),
});

export type CreateTrackInput = z.infer<typeof createTrackSchema>;
export type GetTrackResponse = z.infer<typeof getTrackResponseSchema>;
export type AddTrackToCollection = z.infer<typeof addTrackToCollectionSchema>;
export type RemoveTrackFromCollection = z.infer<
  typeof removeTrackFromCollectionSchema
>;

export const { schemas: trackSchemas, $ref } = buildJsonSchemas(
  {
    createTrackSchema,
    getTrackResponseSchema,
    removeTrackFromCollectionSchema,
    addTrackToCollectionSchema,
  },
  { $id: "trackSchema" },
);
