import { FastifyInstance } from "fastify";
import { $ref } from "./user.schema";
import { signUpUser } from "./user.controller";

async function trackRoutes(server: FastifyInstance) {
  server.post(
    "/auth/user/signup",
    { schema: { body: $ref("signUpUser") } },
    signUpUser,
  );
}

export default trackRoutes;
