import { FastifyPluginAsync } from "fastify";
import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import fastifyPlugin from "fastify-plugin";

declare module "lucia" {
  interface Register {
    Lucia: typeof Lucia;
    DatabaseSessionAttributes: DatabaseSessionAttributes;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseSessionAttributes {}
interface DatabaseUserAttributes {
  username: string;
  email: string;
  name: string;
}

const luciaPlugin: FastifyPluginAsync = fastifyPlugin(async (server) => {
  const prismaClient = server.prisma;
  const adapter = new PrismaAdapter(prismaClient.session, prismaClient.user);

  const lucia = new Lucia(adapter, {
    sessionCookie: {
      attributes: {
        secure: process.env.NODE_ENV === "production",
      },
    },
    getUserAttributes({ email, name }) {
      return {
        email,
        name,
      };
    },
  });

  server.decorate("lucia", lucia);
});

export { luciaPlugin };
