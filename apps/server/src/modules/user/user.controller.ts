import { FastifyReply, FastifyRequest } from "fastify";
import { SignInUser, SignUpUser } from "./user.schema";
import { Prisma } from "@prisma/client";
import { Argon2id } from "oslo/password";

export const registerWithCredentials = async (
  req: FastifyRequest<{ Body: SignUpUser }>,
  rep: FastifyReply,
) => {
  const { email, password, name, birthDate, username } = req.body;
  const hashedPassword = await new Argon2id().hash(password);

  rep.server.log.info({ hashedPassword });

  try {
    const user = await rep.server.prisma.user.create({
      data: {
        email,
        name,
        username,
        birthDate: new Date(birthDate),
        hashedPassword,
      },
    });

    const session = await rep.server.lucia.createSession(user.id, {});

    rep.server.log.info({ session });

    return rep
      .status(201)
      .setCookie("auth_session", session.id, {
        path: "/",
        expires: session.expiresAt,
        httpOnly: true,
        sameSite: "none",
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

export const loginWithCredentials = async (
  req: FastifyRequest<{ Body: SignInUser }>,
  rep: FastifyReply,
) => {
  const { email, password } = req.body;

  try {
    const user = await rep.server.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return rep
        .status(404)
        .send({ status: "error", message: "User not found" });
    }

    const validPassword = await new Argon2id().verify(
      user.hashedPassword,
      password,
    );

    if (!validPassword) {
      return rep
        .status(400)
        .send({ status: "error", message: "Invalid e-mail or password" });
    }

    const session = await rep.server.lucia.createSession(user.id, {});

    return rep
      .status(200)
      .setCookie("auth_session", session.id, {
        path: "/",
        expires: session.expiresAt,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .send({ status: "success", message: "Authenticated" });
  } catch (e) {
    rep.status(500).send({ status: "error", message: e });
  }
};

export const signOut = async (req: FastifyRequest, rep: FastifyReply) => {
  try {
    const user = rep.server.user;

    await rep.server.lucia.invalidateUserSessions(user.id);

    return rep
      .status(204)
      .setCookie("auth_session", "", {
        path: "/",
        expires: new Date("Thu, 01 Jan 1970 00:00:00"),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .send();
  } catch (err) {
    rep.server.log.error(err);

    rep.status(500).send({ status: "error", message: err });
  }
};

export const getUserSessions = async (
  req: FastifyRequest,
  rep: FastifyReply,
) => {
  try {
    const sessions = await rep.server.lucia.getUserSessions(rep.server.user.id);

    return rep.status(200).send({ status: "success", data: sessions });
  } catch (err: unknown) {
    rep.server.log.error(err);

    return rep.status(500).send({ status: "error", message: err });
  }
};

export const getUser = async (req: FastifyRequest, rep: FastifyReply) => {
  const user = rep.server.user;

  rep.status(200).send({ status: "success", data: user });
};
