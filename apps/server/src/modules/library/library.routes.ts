import { FastifyInstance } from "fastify";
import { getLibraryByUserId } from "./library.controller";
import { authHook } from "~/hooks/auth";

const setLibraryRoutes = (server: FastifyInstance) => {
  server.get(
    "/library/playlists",
    { preHandler: authHook },
    getLibraryByUserId,
  );
};

export { setLibraryRoutes };
