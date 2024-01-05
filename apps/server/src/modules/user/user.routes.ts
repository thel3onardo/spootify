import { FastifyInstance } from "fastify";
import { $ref } from "./user.schema";
import {
  signUpWithCredentials,
  signInWithCredentials,
  signOut,
} from "./user.controller";

async function trackRoutes(server: FastifyInstance) {
  server.post(
    "/auth/user/signup",
    { schema: { body: $ref("signUpUser") } },
    signUpWithCredentials,
  );
  server.post("/auth/user/signout", signOut);
  server.post(
    "/auth/user/signin",
    { schema: { body: $ref("signInUser") } },
    signInWithCredentials,
  );
}

export default trackRoutes;
