import { FastifyInstance } from "fastify";
import { authHook } from "~/hooks/auth";
import {
  favoriteTrack,
  getFavoritesTracksByUserId,
  unfavoriteTrack,
} from "./favorites.controller";
import { $ref } from "./favorites.schema";

const setFavoriteRoutes = (server: FastifyInstance) => {
  server.post(
    "/favorites/tracks",
    { preHandler: authHook, schema: { body: $ref("favoriteTrackSchema") } },
    favoriteTrack,
  );

  server.delete(
    "/favorites/tracks/:trackId",
    { preHandler: authHook },
    unfavoriteTrack,
  );

  server.get(
    "/favorites/tracks",
    { preHandler: authHook },
    getFavoritesTracksByUserId,
  );
};

export { setFavoriteRoutes };
