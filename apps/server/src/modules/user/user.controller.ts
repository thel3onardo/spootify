import { FastifyReply, FastifyRequest } from "fastify";

export const getUser = async (req: FastifyRequest, rep: FastifyReply) => {
  const user = rep.server.user;

  rep.status(200).send({ status: "success", data: user });
};
