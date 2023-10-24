import { FastifyReply, FastifyRequest } from "fastify";
import { CreateTrackInput, GetTrackResponse } from "./track.schema";
import { createTrack, getTrackById } from "./track.service";

export async function getTrackHandler(
  request: FastifyRequest<{ Params: { uuid: string }; Body: GetTrackResponse }>,
  reply: FastifyReply,
) {
  const { uuid } = request.params;

  const track = await getTrackById(reply, uuid);

  if (!track) reply.code(404).send({ error: "Track not found" });

  reply.code(200).send({ data: track });
}

export async function createTrackHandler(
  request: FastifyRequest<{ Body: CreateTrackInput }>,
  reply: FastifyReply,
) {
  const track = await createTrack(reply, request.body);

  reply.code(201).send({ track });
}

export async function deleteTrackHandler(
  request: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply,
) {
  const { id } = request.params;

  reply.code(200).send({ id });
}
