import { FastifyInstance } from "fastify";
import { $ref } from "./user.schema";
import {
  registerWithCredentials,
  loginWithCredentials,
  getUser,
  getUserSessions,
  signOut,
} from "./user.controller";
import { authHook } from "../../hooks/auth";

async function trackRoutes(server: FastifyInstance) {
  server.post(
    "/auth/user/signup",
    { schema: { body: $ref("signUpUser") } },
    registerWithCredentials,
  );
  server.post(
    "/auth/user/signin",
    { schema: { body: $ref("signInUser") } },
    loginWithCredentials,
  );
  server.post("/auth/user/signout", { preHandler: [authHook] }, signOut);
  server.get("/user", { preHandler: authHook }, getUser);
  server.get("/user/sessions", { preHandler: authHook }, getUserSessions);
}

export default trackRoutes;
