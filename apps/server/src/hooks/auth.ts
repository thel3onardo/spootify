import { FastifyReply, FastifyRequest } from "fastify";
import { auth } from "../config/lucia";

export const authHook = async (req: FastifyRequest, rep: FastifyReply) => {
  const sessionId = req.cookies["auth_session"];

  if (!sessionId) {
    return rep.status(401).send({ status: "fail", message: "Unauthorized" });
  }

  const session = await auth.getSession(sessionId);

  console.log({ hasDecorator: rep.server.hasDecorator("session") });
  console.log({ session });

  rep.log.info("requestSession", rep.server.session);

  rep.server.session = session;
};
