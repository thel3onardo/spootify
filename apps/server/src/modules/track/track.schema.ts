import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createTrackSchema = z.object({
  name: z.string(),
  coverUrl: z.string(),
  collectionId: z.string(),
});

const getTrackResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  author: z.any(),
});

export type CreateTrackInput = z.infer<typeof createTrackSchema>;
export type GetTrackResponse = z.infer<typeof getTrackResponseSchema>;

export const { schemas: trackSchemas, $ref } = buildJsonSchemas(
  {
    createTrackSchema,
    getTrackResponseSchema,
  },
  { $id: "trackSchema" },
);
