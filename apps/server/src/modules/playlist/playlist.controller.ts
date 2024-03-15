import { FastifyReply, FastifyRequest } from "fastify";
import { Prisma } from "@prisma/client";
import { CreatePlaylistSchema, UpdatePlaylistSchema } from "./playlist.schemas";
// eslint-disable-next-line import/no-unresolved
import { uploadImage } from "~/utils/storage";

export async function createPlaylist(
  req: FastifyRequest<{ Body: CreatePlaylistSchema }>,
  rep: FastifyReply,
) {
  const userId = rep.server.user.id;
  const { name } = req.body;

  try {
    const newPlaylist = await rep.server.prisma.playlist.create({
      data: {
        name,
        authorId: userId,
      },
      select: {
        id: true,
      },
    });
    rep.status(201).send({
      status: "success",
      message: "Playlist created successfully",
      data: { playlistId: newPlaylist.id },
    });
  } catch (err) {
    rep.log.error(err);

    if (
      err instanceof Prisma.PrismaClientValidationError ||
      err instanceof Prisma.PrismaClientKnownRequestError
    ) {
      return rep.status(500).send({ status: "error", message: err.message });
    }

    rep.status(500).send({ status: "error", message: err });
  }
}

export const addTrackToPlaylist = async (
  req: FastifyRequest<{
    Params: { playlistId: string };
    Body: { trackId: number };
  }>,
  rep: FastifyReply,
) => {
  const { playlistId } = req.params;
  const { trackId } = req.body;

  try {
    await rep.server.prisma.trackOnPlaylist.create({
      data: {
        playlistId,
        trackId,
      },
    });

    rep.status(201).send({
      status: "success",
      message: `Track ${trackId} added to playlist ${playlistId}`,
    });
  } catch (err) {
    rep.log.error(err);

    //TODO: handle errors more effectively
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        rep
          .status(400)
          .send({ error: "Track with specified ID does not exist." });
      }
    }
  }
};

export const removeTrackFromPlaylistById = async (
  req: FastifyRequest<{ Params: { trackId: string; playlistId: string } }>,
  rep: FastifyReply,
) => {
  const { trackId, playlistId } = req.params;

  try {
    await rep.server.prisma.trackOnPlaylist.delete({
      where: {
        trackId_playlistId: {
          trackId: Number(trackId),
          playlistId,
        },
      },
    });

    rep.status(204).send({});
  } catch (err) {
    rep.log.error(err);

    rep.status(500).send({ error: err });
  }
};

export async function getPlaylistById(
  req: FastifyRequest<{ Params: { id: string } }>,
  rep: FastifyReply,
) {
  const { id } = req.params;

  try {
    const playlist = await rep.server.prisma.playlist.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        coverImage: true,
        user: {
          select: {
            id: true,
            name: true,
            profileImage: true,
          },
        },
      },
    });
    const tracks = await rep.server.prisma.trackOnPlaylist.findMany({
      where: {
        playlistId: playlist.id,
      },
      select: {
        addedAt: true,
        track: {
          select: {
            id: true,
            name: true,
            coverImage: true,
            artist: {
              select: {
                name: true,
                id: true,
              },
            },
            metadata: {
              select: {
                duration: true,
              },
            },
          },
        },
      },
    });

    const tracksResponse = tracks.map((el) => {
      const { metadata, ...track } = el.track;

      return {
        ...track,
        addedAt: el.addedAt,
        duration: metadata?.duration ?? null,
      };
    });

    const responseBody = {
      data: {
        ...playlist,
        tracks: tracksResponse.length > 0 ? tracksResponse : null,
      },
    };

    rep.status(200).send({ status: "success", ...responseBody });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        return rep.status(404).send({
          status: "Not found",
          message: "Collection with specified ID not found",
        });
      }
      return rep.status(500).send({ status: "err", message: err.message });
    }

    rep.log.error(err);

    rep
      .status(500)
      .send({ status: "err", message: "An unknow error happened" });
  }
}

export async function updatePlaylistById(
  req: FastifyRequest<{ Body: UpdatePlaylistSchema; Params: { id: string } }>,
  rep: FastifyReply,
) {
  const { id } = req.params;
  const { coverImage, ...body } = req.body;

  if (Object.keys(body)?.length === 0) {
    rep.status(400).send({ error: "The body cannot be empty" });
  }

  const imageUrl = coverImage
    ? await getImageUrl(coverImage.data, rep.server)
    : null;

  const data = imageUrl ? { coverImage: imageUrl, ...body } : { ...body };

  rep.log.info({ data });

  try {
    const collection = await rep.server.prisma.playlist.update({
      where: {
        id,
      },
      data,
      select: {
        name: true,
        description: true,
        coverImage: true,
      },
    });

    rep.status(200).send({ status: "success", data: collection });
  } catch (err) {
    rep.log.error(err);

    rep.status(500).send({ error: err });
  }
}

export async function getPlaylistsByUserId(
  req: FastifyRequest,
  rep: FastifyReply,
) {
  const userId = rep.server.user.id;

  try {
    const playlists = await rep.server.prisma.playlist.findMany({
      where: {
        authorId: userId,
      },
    });

    return rep.status(200).send({ status: "success", data: playlists });
  } catch (err) {
    rep.log.error(err);

    rep.status(500).send({ status: "error", message: err });
  }
}

// export async function deleteCollectionById() {
//   //todo
// }

// // export async function removeTrackFromSchema(
// //   req: FastifyRequest<{
// //     Params: { collectionId: string };
// //     Body: RemoveTrackFromSchema;
// //   }>,
// //   rep: FastifyReply,
// // ) {
// //   const { collectionId } = req.params;
// //   const { trackId } = req.body;

// //   try {
// //     await rep.server.prisma.trackOnCollection.delete({
// //       where: {
// //         trackId,
// //         collectionId,
// //       },
// //     });

// //     rep
// //       .status(201)
// //       .send({ status: "success", message: "Song added to collection" });
// //   } catch (err) {
// //     //todo
// //   }

// //   rep.status(200).send({ status: "success", collectionId });
// // }
// //
const getImageUrl = async (image: Buffer, server: any) => {
  const base64 = Buffer.from(image).toString("base64");
  const upload = await uploadImage(server, base64, "test");

  server.log.info({ upload });

  return upload.url;
};
