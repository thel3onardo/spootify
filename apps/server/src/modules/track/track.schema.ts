import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createTrackSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

export type CreateTrackInput = z.infer<typeof createTrackSchema>;

export const { schemas: trackSchemas, $ref } = buildJsonSchemas({
  createTrackSchema,
});
