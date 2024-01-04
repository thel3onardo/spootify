import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCollection, UpdateCollection } from "./collection.schema";
import { Prisma } from "@prisma/client";

export async function createCollection(
  req: FastifyRequest<{ Body: CreateCollection }>,
  rep: FastifyReply,
) {
  const data = req.body;

  try {
    const collection = await rep.server.prisma.collection.create({
      data,
    });
    rep.status(201).send({ collection });
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientValidationError ||
      err instanceof Prisma.PrismaClientKnownRequestError
    ) {
      return rep.status(400).send({ err: err.message });
    }

    rep.status(500).send({ err });
  }
}

export const addTrackToCollection = async (
  req: FastifyRequest<{
    Params: { collectionID: string };
    Body: { trackID: number };
  }>,
  rep: FastifyReply,
) => {
  const { collectionID } = req.params;
  const { trackID } = req.body;

  try {
    const track = await rep.server.prisma.collection.update({
      where: {
        id: collectionID,
      },
      data: {
        tracks: {
          connect: {
            id: trackID,
          },
        },
      },
    });

    rep
      .status(201)
      .send({ message: "Track added to playlist", newTrackID: track.id });
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
    await rep.server.prisma.collection.update({
      where: {
        id: collectionID,
      },
      data: {
        tracks: {
          disconnect: {
            id: Number(trackID),
          },
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

  const collection = await rep.server.prisma.collection.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      description: true,
      tracks: {
        select: {
          id: true,
          name: true,
          coverImage: true,
          authorId: true,
        },
      },
    },
  });

  if (!collection) {
    return rep.status(404).send({ status: "No collection found" });
  }

  rep.status(200).send({ data: collection });
}

export async function updateCollectionById(
  req: FastifyRequest<{ Body: UpdateCollection; Params: { id: string } }>,
  rep: FastifyReply,
) {
  const { id } = req.params;
  const body = req.body;

  if (Object.keys(body)?.length === 0) {
    rep.status(400).send({ error: "The body cannot be empty" });
  }

  try {
    const collection = await rep.server.prisma.collection.update({
      where: {
        id,
      },
      data: {
        ...req.body,
      },
      select: {
        name: true,
        description: true,
        coverImage: true,
      },
    });

    rep.status(200).send({ data: collection });
  } catch (err) {
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
