import { FastifyReply, FastifyRequest } from "fastify";
import { LoginSchema, RegisterSchema } from "./auth.schemas";
import { Argon2id } from "oslo/password";
import { Prisma } from "@prisma/client";

export const registerWithCredentials = async (
  req: FastifyRequest<{ Body: RegisterSchema }>,
  rep: FastifyReply,
) => {
  const { bornDate, confirmPassword, email, password, name } = req.body;

  if (password !== confirmPassword) {
    return rep.status(400).send({
      status: "error",
      message: "Password and confirmation password does not match",
    });
  }

  const hashedPassword = await new Argon2id().hash(password);

  try {
    const user = await rep.server.prisma.user.create({
      data: {
        email,
        name,
        birthDate: new Date(bornDate),
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
  req: FastifyRequest<{ Body: LoginSchema }>,
  rep: FastifyReply,
) => {
  const { email, password, refreshSessions } = req.body;

  //TODO: handle refresh sessions
  rep.log.info({ refreshSessions });

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

export const getSessions = async (req: FastifyRequest, rep: FastifyReply) => {
  try {
    const sessions = await rep.server.lucia.getUserSessions(rep.server.user.id);

    return rep.status(200).send({ status: "success", data: sessions });
  } catch (err: unknown) {
    rep.server.log.error(err);

    return rep.status(500).send({ status: "error", message: err });
  }
};
