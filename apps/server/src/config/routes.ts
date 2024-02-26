import { FastifyInstance } from "fastify";

import collectionRoutes from "../modules/collection/collection.route";
import trackRoutes from "../modules/track/track.route";
import userRoutes from "../modules/user/user.routes";

const setupRoutes = (server: FastifyInstance) => {
  server.register(
    (app, _, done) => {
      trackRoutes(app);
      collectionRoutes(app);
      userRoutes(app);

      done();
    },
    { prefix: "/api" },
  );
};

export { setupRoutes };
