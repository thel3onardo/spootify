import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const favoriteTrackSchema = z.object({
  trackId: z.number(),
});

export type FavoriteTrack = z.infer<typeof favoriteTrackSchema>;

export const { schemas: favoritesSchemas, $ref } = buildJsonSchemas(
  {
    favoriteTrackSchema,
  },
  { $id: "favoritesSchemas" },
);
