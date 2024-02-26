import { FastifyInstance } from "fastify";
import { loginUserHandler, registerUserHandler } from "./auth.controller";
import { $ref } from "./auth.schema";
// import { signOut } from "../user/user.controller";

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
  // server.post("/auth/signout", signOut);
  server.get("/auth", registerUserHandler);
}

export default authRoutes;
