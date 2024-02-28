import { FastifyReply, FastifyRequest } from "fastify";

//todo
export const getLibraryByUserId = async (
  req: FastifyRequest,
  rep: FastifyReply,
) => {
  const userId = rep.server.user.id;

  if (!userId)
    return rep
      .status(500)
      .send({ status: "error", error: "User with speicified ID not found" });

  try {
    const userPlaylists = await rep.server.prisma.playlist.findMany({
      where: {
        authorId: userId,
      },
      select: {
        name: true,
        id: true,
        coverImage: true,
      },
    });

    rep.status(200).send({ status: "success", data: userPlaylists });
  } catch (error) {
    rep.status(500).send({ status: "error", error });
  }
};

// export const getLikedTracks = (req: FastifyRequest, rep: FastifyReply) => {};
// export const getLikedPlaylists = (req: FastifyRequest, rep: FastifyReply) => {};
// export const getLikedAlbums = (req: FastifyRequest, rep: FastifyReply) => {};
// export const getFollowingArtists = (
//   req: FastifyRequest,
//   rep: FastifyReply,
// ) => {};
