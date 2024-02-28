import { FastifyInstance } from "fastify";
import {
  getSessions,
  loginWithCredentials,
  registerWithCredentials,
  signOut,
} from "./auth.controller";
import { $ref } from "./auth.schemas";
import { authHook } from "~/hooks/auth";

const setAuthRoutes = (server: FastifyInstance) => {
  server.post(
    "/auth/register",
    { schema: { body: $ref("registerSchema") } },
    registerWithCredentials,
  );
  server.post(
    "/auth/login",
    { schema: { body: $ref("loginSchema") } },
    loginWithCredentials,
  );
  server.get("/auth/sign-out", signOut);
  server.get("/auth/sessions", { preHandler: authHook }, getSessions);
};

export { setAuthRoutes };
