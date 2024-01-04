import { lucia } from "lucia";
import { prisma } from "@lucia-auth/adapter-prisma";
import { initializePrisma } from "../config/prisma";

const client = initializePrisma();

export const auth = lucia({
  env: "DEV",
  adapter: prisma(client, {
    user: "user",
    key: "key",
    session: "session",
  }),
});

export type Auth = typeof auth;
