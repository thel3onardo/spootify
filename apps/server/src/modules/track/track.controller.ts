import { FastifyReply, FastifyRequest } from "fastify";
import { CreateTrackInput } from "./track.schema";

export async function getTrackHandler(
  request: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply,
) {
  const { id } = request.params;

  reply.code(200).send({ id });
}

export async function createTrackHandler(
  request: FastifyRequest<{ Body: CreateTrackInput }>,
  reply: FastifyReply,
) {
  reply.code(200).send({ yes: "yes" });
}

export async function deleteTrackHandler(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  reply.code(200).send({ yes: "deleted" });
}
