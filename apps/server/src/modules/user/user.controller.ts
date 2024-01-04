import { FastifyReply, FastifyRequest } from "fastify";
import { SignUpUser } from "./user.schema";

export const signUpUser = (
  req: FastifyRequest<{ Body: SignUpUser }>,
  rep: FastifyReply,
) => {
  const body = req.body;

  rep.status(200).send({ body });
};
