import { FastifyInstance } from "fastify";
import { authSchemas } from "~/modules/auth/auth.schemas";
import { favoritesSchemas } from "~/modules/favorites/favorites.schema";
import { playlistSchemas } from "~/modules/playlist/playlist.schemas";
import { trackSchemas } from "~/modules/track/track.schema";

const setupSchemas = (server: FastifyInstance) => {
  for (const schema of [
    ...trackSchemas,
    ...playlistSchemas,
    ...authSchemas,
    ...favoritesSchemas,
  ]) {
    server.addSchema(schema);
  }
};

export { setupSchemas };
