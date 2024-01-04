import { FastifyReply, FastifyRequest } from "fastify";
import { SignUpUser } from "./user.schema";
import { auth } from "../../config/lucia";

export const signUpUser = async (
  req: FastifyRequest<{ Body: SignUpUser }>,
  rep: FastifyReply,
) => {
  const { email, password, name, birthDate } = req.body;

  try {
    const user = await auth.createUser({
      key: {
        providerId: "email",
        providerUserId: email,
        password,
      },
      attributes: {
        email,
        name,
        birthDate,
      },
    });

    rep.status(201).send({ user });
  } catch (err) {
    rep.log.error(err);
    rep.status(500).send({ err });
  }
  const body = req.body;

  rep.status(200).send({ body });
};
