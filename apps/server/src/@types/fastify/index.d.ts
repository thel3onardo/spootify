import { PrismaClient } from "@prisma/client";
import { Session } from "lucia";

declare module "fastify" {
  export interface FastifyInstance<
    /* eslint-disable */
    HttpServer = Server,
    HttpRequest = IncomingMessage,
    HttpResponse = ServerResponse,
    /* eslint-disable */
  > {
    session: Session | null;
    prisma: PrismaClient;
    config: {
      PORT: number;
      JWT_SECRET: string;
      DATABASE_URL: string;
      IMAGEKIT_PUBLIC_KEY: string;
      IMAGEKIT_PRIVATE_KEY: string;
      IMAGEKIT_URL_ENDPOINT: string;
    };
  }
}
