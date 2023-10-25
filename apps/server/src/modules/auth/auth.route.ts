import { FastifyInstance } from "fastify";
import { loginUserHandler, registerUserHandler } from "./auth.controller";
import { $ref } from "./auth.schema";

async function authRoutes(server: FastifyInstance) {
  server.post(
    "/auth/register",
    { schema: { body: $ref("userRegisterSchema") } },
    registerUserHandler,
  );
  server.post(
    "/auth/login",
    { schema: { body: $ref("loginUserSchema") } },
    loginUserHandler,
  );
  server.get("/auth", registerUserHandler);
}

export default authRoutes;
