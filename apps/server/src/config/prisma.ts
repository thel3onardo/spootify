import { PrismaClient } from "../../prisma/generated-client/";

export const initializePrisma = () => {
  const client = new PrismaClient({ errorFormat: "pretty" });

  return client;
};
