import { FastifyInstance } from "fastify";
import { $ref } from "./user.schema";
import {
  signUpWithCredentials,
  signInWithCredentials,
  signOut,
  getUser,
} from "./user.controller";
import { authHook } from "../../hooks/auth";

async function trackRoutes(server: FastifyInstance) {
  server.post(
    "/auth/user/signup",
    { schema: { body: $ref("signUpUser") } },
    signUpWithCredentials,
  );
  server.post(
    "/auth/user/signin",
    { schema: { body: $ref("signInUser") } },
    signInWithCredentials,
  );
  server.post("/auth/user/signout", { preHandler: [authHook] }, signOut);
  server.get("/user", { preHandler: authHook }, getUser);
}

export default trackRoutes;
