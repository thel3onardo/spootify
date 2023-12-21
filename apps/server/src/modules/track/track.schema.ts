import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createTrackSchema = z.object({
  name: z.string(),
  authorID: z.number(),
  coverImageFile: z.any(),
  audioFile: z.any(),
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

const testSchema = z.object({
  test: z.string().max(20),
  another: z.string(),
  image: z.any(),
});

export type CreateTrackInput = z.infer<typeof createTrackSchema>;
export type GetTrackResponse = z.infer<typeof getTrackResponseSchema>;
export type AddTrackToCollection = z.infer<typeof addTrackToCollectionSchema>;
export type RemoveTrackFromCollection = z.infer<
  typeof removeTrackFromCollectionSchema
>;
export type TestType = z.infer<typeof testSchema>;

export const { schemas: trackSchemas, $ref } = buildJsonSchemas(
  {
    createTrackSchema,
    getTrackResponseSchema,
    removeTrackFromCollectionSchema,
    addTrackToCollectionSchema,
    testSchema,
  },
  { $id: "trackSchema" },
);
