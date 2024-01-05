import { FastifyReply, FastifyRequest } from "fastify";
import { SignInUser, SignUpUser } from "./user.schema";
import { auth } from "../../config/lucia";
import { Prisma } from "@prisma/client";
import crypto from "crypto";
import { LuciaError } from "lucia";

export const signUpWithCredentials = async (
  req: FastifyRequest<{ Body: SignUpUser }>,
  rep: FastifyReply,
) => {
  const { email, password, name, birthDate } = req.body;

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
      .setCookie("auth_session", session.sessionId, {
        path: "/",
        expires: session.activePeriodExpiresAt,
        httpOnly: true,
        secure: true,
      })
      .send({ status: "success", message: "User created successfully" });
  } catch (err) {
    rep.log.error(err);

    if (err instanceof Prisma.PrismaClientValidationError) {
      return rep.status(500).send({ err: err.name });
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return rep.status(422).send({ error: "Email already in use" });
      }
    }
    rep.status(500).send({ err });
  }
};

export const signInWithCredentials = async (
  req: FastifyRequest<{ Body: SignInUser }>,
  rep: FastifyReply,
) => {
  const { email, password } = req.body;

  try {
    const user = await auth.useKey("email", email, password);
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });

    return rep
      .status(200)
      .setCookie("auth_session", session.sessionId, {
        path: "/",
        expires: session.activePeriodExpiresAt,
        httpOnly: true,
        secure: true,
      })
      .send({ status: "success", message: "Authenticated" });
  } catch (e) {
    if (
      e instanceof LuciaError &&
      (e.message === "AUTH_INVALID_KEY_ID" ||
        e.message === "AUTH_INVALID_PASSWORD")
    ) {
      return rep
        .status(404)
        .send({ status: "error", message: "Email or password invalid" });
    }

    rep.status(500).send({ status: "Unknown error", message: e });
  }
};
