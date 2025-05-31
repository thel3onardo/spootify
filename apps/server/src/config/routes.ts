import { FastifyInstance } from "fastify";
import trackRoutes from "../modules/track/track.route";
import userRoutes from "../modules/user/user.routes";
import { setPlaylistRoutes } from "../modules/playlist/playlist.routes";
import { setAuthRoutes } from "~/modules/auth/auth.routes";
import { setLibraryRoutes } from "~/modules/library/library.routes";
import { setFavoriteRoutes } from "~/modules/favorites/favorites.routes";

const setupRoutes = (server: FastifyInstance) => {
  server.register(
    (app, _, done) => {
      trackRoutes(app);
      setPlaylistRoutes(app);
      userRoutes(app);
      setAuthRoutes(app);
      setLibraryRoutes(app);
      setFavoriteRoutes(app);

      done();
    },
    { prefix: "/api" },
  );
};

export { setupRoutes };
