import { FastifyReply, FastifyRequest } from "fastify";
import { SignUpUser } from "./user.schema";
import { auth } from "../../config/lucia";
import { Prisma } from "@prisma/client";
import crypto from "crypto";

export const signUpUser = async (
  req: FastifyRequest<{ Body: SignUpUser }>,
  rep: FastifyReply,
) => {
  const { email, password, name, birthDate } = req.body;

  rep.log.info({ randomID: crypto.randomUUID() });

  try {
    const user = await auth.createUser({
      userId: crypto.randomUUID(),
      key: {
        providerId: "email",
        providerUserId: email,
        password,
      },
      attributes: {
        email,
        name,
        birthDate: new Date(birthDate),
      },
    });

    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });

    rep.log.info({ session });

    return rep
      .status(201)
      .send({ status: "success", message: "User created successfully" });
  } catch (err) {
    rep.log.error(err);

    if (err instanceof Prisma.PrismaClientValidationError) {
      return rep.status(401).send({ err: err.name });
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return rep.status(401).send({ error: "Email already in use" });
      }
    }
    rep.status(500).send({ err });
  }
};
