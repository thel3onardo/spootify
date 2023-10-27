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
          track: true,
        },
      },
    },
  });

  const count = await rep.server.prisma.collection.count({
    where: {
      id,
    },
  });

  if (!collection) {
    return rep.status(404).send({ status: "No collection found" });
  }

  rep.status(200).send({ data: collection, count });
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
