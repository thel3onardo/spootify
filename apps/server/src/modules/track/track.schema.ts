import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createTrackInputSchema = z.object({
  name: z.string(),
  artistId: z.string(),
  coverImageFile: z.any(),
  albumId: z.string(),
  audioFile: z.any(),
});

const getTrackResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  author: z.any(),
});

//TODO: remove this
const testSchema = z.object({
  test: z.string().max(20),
  another: z.string(),
  image: z.any(),
});

export type CreateTrackInput = z.infer<typeof createTrackInputSchema>;
export type GetTrackResponse = z.infer<typeof getTrackResponseSchema>;
//TODO: remove type
export type TestType = z.infer<typeof testSchema>;

export const { schemas: trackSchemas, $ref } = buildJsonSchemas(
  {
    createTrackInputSchema,
    getTrackResponseSchema,
    testSchema,
  },
  { $id: "trackSchema" },
);
