import { FastifyInstance } from "fastify";

import trackRoutes from "../modules/track/track.route";
import userRoutes from "../modules/user/user.routes";
import { setPlaylistRoutes } from "../modules/playlist/playlist.routes";

const setupRoutes = (server: FastifyInstance) => {
  server.register(
    (app, _, done) => {
      trackRoutes(app);
      setPlaylistRoutes(app);
      userRoutes(app);

      done();
    },
    { prefix: "/api" },
  );
};

export { setupRoutes };
