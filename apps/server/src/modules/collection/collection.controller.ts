import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCollection } from "./collection.schema";
import { Prisma } from "@prisma/client";

export async function getColletionById(
  req: FastifyRequest<{ Params: { id: string } }>,
  rep: FastifyReply,
) {
  const { id } = req.params;
  console.log({ id });

  const collection = await rep.server.prisma.collection.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      bio: true,
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
