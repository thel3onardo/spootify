import { Prisma } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

export const favoriteTrack = async (
  req: FastifyRequest<{ Body: { trackId: number } }>,
  rep: FastifyReply,
) => {
  const trackId = req.body.trackId;
  const userId = req.server.user.id;

  try {
    //verify if track already favorited
    const trackFavorited = await rep.server.prisma.favoriteTrack.findFirst({
      where: {
        trackId,
        userId,
      },
    });

    if (trackFavorited) {
      return rep
        .status(400)
        .send({ status: "error", error: "Track already favorited" });
    }

    await rep.server.prisma.favoriteTrack.create({
      data: {
        trackId,
        userId,
      },
    });

    return rep
      .status(201)
      .send({ status: "success", message: "Track favorited" });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2003") {
        return rep.status(400).send({
          status: "error",
          error: "Track with specified ID does not found",
        });
      }
    }
    rep.server.log.error(err);

    rep.status(500).send({ err });
  }
};

export const unfavoriteTrack = async (
  req: FastifyRequest<{ Params: { trackId: string } }>,
  rep: FastifyReply,
) => {
  const { trackId } = req.params;
  const userId = rep.server.user.id;

  try {
    await rep.server.prisma.favoriteTrack.delete({
      where: {
        trackId_userId: {
          trackId: Number(trackId),
          userId,
        },
      },
    });

    return rep.status(204).send({});
  } catch (error) {
    rep.server.log.error(error);
    rep.status(500).send({ status: "error", error });
  }
};

export const getFavoritesTracksByUserId = async (
  req: FastifyRequest,
  rep: FastifyReply,
) => {
  const userId = rep.server.user.id;
  const tracks = await rep.server.prisma.favoriteTrack.findMany({
    where: {
      userId,
    },
    select: {
      track: {
        select: {
          id: true,
          name: true,
          coverImage: true,
          albumId: true,
        },
      },
    },
  });

  rep
    .status(200)
    .send({ status: "success", data: tracks.map((track) => track.track) });
};
