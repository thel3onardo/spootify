import { FastifyInstance } from "fastify";
import { getUser } from "./user.controller";
import { authHook } from "../../hooks/auth";

async function trackRoutes(server: FastifyInstance) {
  server.get("/user", { preHandler: authHook }, getUser);
}

export default trackRoutes;
