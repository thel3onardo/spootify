import bcrypt from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";
import { LoginUserInput, RegisterUserInput } from "./auth.schema";
import { BCRYPT_SALT_ROUNDS } from "./constants";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const registerUserHandler = async (
  req: FastifyRequest<{ Body: RegisterUserInput }>,
  rep: FastifyReply,
) => {
  const { password, ...body } = req.body;
  const passwordHash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

  try {
    await rep.server.prisma.user.create({
      data: {
        passwordHash,
        ...body,
      },
      select: {
        id: true,
      },
    });

    rep.code(201).send({ status: "User created successfully" });
  } catch (err) {
    rep.log.error(err);
    if (err instanceof PrismaClientKnownRequestError) {
      return rep.code(500).send({ error: "Email already in use" });
    }
    rep.code(500).send({ error: err });
  }
};

export const loginUserHandler = async (
  req: FastifyRequest<{ Body: LoginUserInput }>,
  rep: FastifyReply,
) => {
  const user = await rep.server.prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
    select: {
      id: true,
      email: true,
      passwordHash: true,
    },
  });

  if (!user) {
    return rep.code(404).send({ message: "User not found" });
  }

  const passwordMatch = await bcrypt.compare(
    req.body.password,
    user.passwordHash,
  );

  if (!passwordMatch) {
    return rep.code(400).send({ message: "Wrong password" });
  }

  const token = await rep.jwtSign({ userId: user.id });

  rep.code(200).send({ token });
};
