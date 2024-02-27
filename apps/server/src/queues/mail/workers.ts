import { Job, Worker } from "bullmq";
import { FastifyBaseLogger } from "fastify";
import {
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} from "nodemailer";

export interface AnotherJobData {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export const setupMailWorker = (logger: FastifyBaseLogger) => {
  const mailWorker = new Worker(
    "mail",
    async (job: Job) => {
      const info = await sendEmailWithNodemailer(job.data);

      logger.info("Preview URL %s", getTestMessageUrl(info));
      logger.debug({ info });

      return "test";
    },
    {
      prefix: "mail",
      connection: {
        host: "localhost",
        port: 6379,
      },
    },
  );

  mailWorker.on("failed", (job, error: Error) => {
    console.log("job failed", error, job);
  });

  // mailWorker.on("completed", (job, returnedValue) => {
  //   console.log("job finished", returnedValue, job);
  // });
};

async function sendEmailWithNodemailer({
  from,
  to,
  subject,
  text,
}: AnotherJobData) {
  const testAccount = await createTestAccount();
  //TODO: change transporter to mailgun
  const transporter = createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html: `<p>ephemeral html</p>`,
  });

  return info;
}
