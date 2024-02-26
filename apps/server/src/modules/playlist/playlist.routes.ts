import { FastifyInstance } from "fastify";
import { $ref } from "./playlist.schemas";
import {
  addTrackToPlaylist,
  createPlaylist,
  getPlaylistById,
  getPlaylistsByUserId,
  removeTrackFromPlaylistById,
  updatePlaylistById,
} from "./playlist.controller";
import { authHook } from "../../hooks/auth";

const setPlaylistRoutes = (server: FastifyInstance) => {
  server.get("/playlist/:id", getPlaylistById);
  server.get("/playlists", { preHandler: [authHook] }, getPlaylistsByUserId);
  server.patch(
    "/playlist/:id",
    { schema: { body: $ref("updatePlaylistSchema") }, preHandler: [authHook] },
    updatePlaylistById,
  );
  //TODO: implement schema validation for this one.
  server.post("/playlist/:playlistId/add-track", addTrackToPlaylist);
  server.delete(
    "/playlist/:playlistId/remove-track/:trackId",
    { preHandler: [authHook] },
    removeTrackFromPlaylistById,
  );
  server.post(
    "/playlist",
    {
      schema: { body: $ref("createPlaylistSchema") },
      preHandler: [authHook],
    },
    createPlaylist,
  );
};

export { setPlaylistRoutes };
