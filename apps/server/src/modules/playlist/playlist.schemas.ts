import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createPlaylistSchema = z.object({
  name: z.string(),
});

const updatePlaylistSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  coverImage: z.any().optional(),
});

export type CreatePlaylistSchema = z.infer<typeof createPlaylistSchema>;
export type UpdatePlaylistSchema = z.infer<typeof updatePlaylistSchema>;

export const { schemas: playlistSchemas, $ref } = buildJsonSchemas(
  {
    createPlaylistSchema,
    updatePlaylistSchema,
  },
  { $id: "playlistSchemas" },
);
