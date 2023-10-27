import { FastifyReply, FastifyRequest } from "fastify";
import {
  AddTrackToCollection,
  CreateTrackInput,
  GetTrackResponse,
} from "./track.schema";
import { Prisma } from "@prisma/client";

export async function getTrackHandler(
  request: FastifyRequest<{ Params: { id: number }; Body: GetTrackResponse }>,
  reply: FastifyReply,
) {
  // const { uuid } = request.params;
  // const track = await getTrackById(reply, uuid);
  // if (!track) reply.code(404).send({ error: "Track not found" });
  // reply.code(200).send({ data: track });
}

export async function createTrack(
  req: FastifyRequest<{ Body: CreateTrackInput }>,
  rep: FastifyReply,
) {
  try {
    const track = await rep.server.prisma.track.create({
      data: req.body,
    });

    rep.status(201).send({ message: "Track created successfully" });
  } catch (error) {
    rep.status(500).send({ error });
  }
}

export async function deleteTrackHandler(
  request: FastifyRequest<{ Params: { id: number } }>,
  rep: FastifyReply,
) {
  // const { id } = request.params;
  // reply.code(200).send({ id });
}

export async function addTrackToCollectionById(
  req: FastifyRequest<{
    Params: { collectionId: string };
    Body: AddTrackToCollection;
  }>,
  rep: FastifyReply,
) {
  const { collectionId } = req.params;
  const { trackId } = req.body;

  try {
    await rep.server.prisma.trackOnCollection.create({
      data: {
        trackId,
        collectionId,
      },
    });

    rep
      .status(201)
      .send({ status: "success", message: "Song added to collection" });
  } catch (error) {
    rep.log.error(error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        rep.status(409).send({ error: "Track already exists in collection" });
      }

      return rep.status(500).send({ error: error.message });
    }

    rep.status(500).send({ error });
  }

  rep.status(200).send({ status: "success", collectionId });
}
