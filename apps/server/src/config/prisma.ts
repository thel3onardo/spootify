import { PrismaClient } from "@prisma/client";

export const initializePrisma = () => {
  const client = new PrismaClient({ errorFormat: "pretty" });

  return client;
};
