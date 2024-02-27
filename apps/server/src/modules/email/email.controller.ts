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

  sendMail(to);

  // await sendNewEmail({ from, to, subject, text }, rep.server.emailQueue);

  // const testAccount = await nodemailer.createTestAccount();
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: testAccount.user,
  //     pass: testAccount.pass,
  //   },
  //   tls: {
  //     rejectUnauthorized: false,
  //   },
  // });

  // const info = await transporter.sendMail({
  //   from,
  //   to,
  //   subject,
  //   text,
  //   html: `<strong>${text}</strong>`,
  // });

  // rep.log.info("Message sent: %s", info.messageId);
  // rep.log.info("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  rep.status(200).send({
    status: "success",
    message: "Email sent",
  });
};
