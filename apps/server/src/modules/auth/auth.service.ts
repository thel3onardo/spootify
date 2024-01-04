import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { Prisma, PrismaClient } from "@prisma/client";
import { LoginUserInput } from "./auth.schema";

export const registerUser = async (
  body: Prisma.UserCreateInput,
  prisma: PrismaClient,
) => {
  try {
    const res = await prisma.user.create({
      data: body,
    });

    return res;
  } catch (err) {
    //TODO: improve this shit
    if (err instanceof PrismaClientValidationError) {
      return err.message;
    }
    return err;
  }
};

export const loginUser = async (
  body: LoginUserInput,
  prisma: PrismaClient,
): Promise<{ id: number; passwordHash: string; email: string } | null> => {
  try {
    const userFound = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
      select: {
        id: true,
        passwordHash: true,
        email: true,
      },
    });

    return userFound;
  } catch (err) {
    return null;
  }
};
