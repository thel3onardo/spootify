import { FastifyInstance } from "fastify";

import authRoutes from "../modules/auth/auth.route";
import collectionRoutes from "../modules/collection/collection.route";
import trackRoutes from "../modules/track/track.route";
import userRoutes from "../modules/user/user.routes";

const setupRoutes = (server: FastifyInstance) => {
  server.register(
    (app, _, done) => {
      trackRoutes(app);
      authRoutes(app);
      collectionRoutes(app);
      userRoutes(app);

      done();
    },
    { prefix: "/api" },
  );
};

export { setupRoutes };
