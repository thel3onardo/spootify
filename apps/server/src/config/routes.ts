import { FastifyInstance } from "fastify";
import trackRoutes from "../modules/track/track.route";
import userRoutes from "../modules/user/user.routes";
import { setPlaylistRoutes } from "../modules/playlist/playlist.routes";
import { sendEmail } from "~/modules/email/email.controller";

const setupRoutes = (server: FastifyInstance) => {
  server.register(
    (app, _, done) => {
      trackRoutes(app);
      setPlaylistRoutes(app);
      userRoutes(app);

      app.post("/email", sendEmail);

      done();
    },
    { prefix: "/api" },
  );
};

export { setupRoutes };
