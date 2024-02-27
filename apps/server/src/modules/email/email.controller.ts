import { FastifyReply, FastifyRequest } from "fastify";
import { sendMail } from "~/queues/mail/jobs";

export const sendEmail = async (
  req: FastifyRequest<{
    Body: { from: string; to: string; subject: string; text: string };
  }>,
  rep: FastifyReply,
) => {
  const { from, to, subject, text } = req.body;

  rep.log.info("Sending email to: ", to);

  sendMail({ from, to, subject, text });

  rep.status(200).send({
    status: "success",
    message: "Email sent",
  });
};
