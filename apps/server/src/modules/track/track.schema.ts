import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createTrackSchema = z.object({
  name: z.string(),
  authorID: z.string(),
  coverImageFile: z.any(),
  audioFile: z.any(),
});

const getTrackResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  author: z.any(),
});

const testSchema = z.object({
  test: z.string().max(20),
  another: z.string(),
  image: z.any(),
});

export type CreateTrackInput = z.infer<typeof createTrackSchema>;
export type GetTrackResponse = z.infer<typeof getTrackResponseSchema>;
export type TestType = z.infer<typeof testSchema>;

export const { schemas: trackSchemas, $ref } = buildJsonSchemas(
  {
    createTrackSchema,
    getTrackResponseSchema,
    testSchema,
  },
  { $id: "trackSchema" },
);
