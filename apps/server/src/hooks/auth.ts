//TODO: any is bad, right?
// eslint-disable-next-line
export const authHook = async (req: any, rep: any) => {
  const cookieSessionId = req.cookies["auth_session"];

  if (!cookieSessionId)
    return rep.status(401).send({ status: "error", message: "Unauthorized" });

  const { session, user } =
    await rep.server.lucia.validateSession(cookieSessionId);

  if (!session) {
    return rep.status(401).send({ status: "error", message: "Unauthorized" });
  }

  //is this injection? pretty sure it is.
  rep.server.session = session;
  rep.server.user = user;
};
