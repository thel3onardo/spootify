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
  }
}
