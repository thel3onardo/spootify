import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCollection, UpdateCollection } from "./collection.schema";
import { Prisma } from "@prisma/client";
import { uploadImage } from "src/utils/storage";

export async function createCollection(
  req: FastifyRequest<{ Body: CreateCollection }>,
  rep: FastifyReply,
) {
  const data = req.body;

  try {
    const collection = await rep.server.prisma.collection.create({
      data,
      select: {
        id: true,
      },
    });
    rep
      .status(201)
      .send({ status: "success", data: { collectionId: collection.id } });
  } catch (err) {
    rep.log.error(err);

    if (
      err instanceof Prisma.PrismaClientValidationError ||
      err instanceof Prisma.PrismaClientKnownRequestError
    ) {
      return rep.status(500).send({ err: err.message });
    }

    rep.status(500).send({ err });
  }
}

export const addTrackToCollection = async (
  req: FastifyRequest<{
    Params: { collectionId: string };
    Body: { trackId: number };
  }>,
  rep: FastifyReply,
) => {
  const { collectionId } = req.params;
  const { trackId } = req.body;

  try {
    await rep.server.prisma.trackOnCollection.create({
      data: {
        collectionId,
        trackId: Number(trackId),
      },
    });

    rep
      .status(201)
      .send({ message: `Track ${trackId} added to playlist ${collectionId}` });
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

export const removeTrackFromCollectionById = async (
  req: FastifyRequest<{ Params: { trackID: string; collectionID: string } }>,
  rep: FastifyReply,
) => {
  const { trackID, collectionID } = req.params;

  try {
    await rep.server.prisma.trackOnCollection.delete({
      where: {
        trackId_collectionId: {
          trackId: Number(trackID),
          collectionId: collectionID,
        },
      },
    });

    rep.status(204);
  } catch (err) {
    rep.log.error(err);

    rep.status(500).send({ error: err });
  }
};

export async function getColletionById(
  req: FastifyRequest<{ Params: { id: string } }>,
  rep: FastifyReply,
) {
  const { id } = req.params;

  try {
    const collection = await rep.server.prisma.collection.findUniqueOrThrow({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        coverImage: true,
      },
    });
    const tracks = await rep.server.prisma.trackOnCollection.findMany({
      where: {
        collectionId: collection.id,
      },
      select: {
        addedAt: true,
        track: {
          select: {
            id: true,
            name: true,
            coverImage: true,
            author: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    });
    //TODO: implement favorite

    const responseBody = {
      data: {
        ...collection,
        tracks: tracks.map((track) => {
          return { addedAt: track.addedAt, ...track.track };
        }),
      },
    };

    rep.status(200).send(responseBody);
  } catch (err) {
    rep.log.error(err);

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      return rep.status(500).send({ status: "err", message: err.message });
    }

    rep
      .status(500)
      .send({ status: "err", message: "An unknow error happened" });
  }
}

export async function updateCollectionById(
  req: FastifyRequest<{ Body: UpdateCollection; Params: { id: string } }>,
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
    const collection = await rep.server.prisma.collection.update({
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

    rep.status(200).send({ data: collection });
  } catch (err) {
    rep.log.info("error here");
    rep.log.error(err);
    rep.status(500).send({ error: err });
  }
}

export async function deleteCollectionById() {
  //todo
}

// export async function removeTrackFromSchema(
//   req: FastifyRequest<{
//     Params: { collectionId: string };
//     Body: RemoveTrackFromSchema;
//   }>,
//   rep: FastifyReply,
// ) {
//   const { collectionId } = req.params;
//   const { trackId } = req.body;

//   try {
//     await rep.server.prisma.trackOnCollection.delete({
//       where: {
//         trackId,
//         collectionId,
//       },
//     });

//     rep
//       .status(201)
//       .send({ status: "success", message: "Song added to collection" });
//   } catch (err) {
//     //todo
//   }

//   rep.status(200).send({ status: "success", collectionId });
// }
//
const getImageUrl = async (image: Buffer, server: any) => {
  const base64 = Buffer.from(image).toString("base64");
  const upload = await uploadImage(server, base64, "test");

  server.log.info({ upload });

  return upload.url;
};
