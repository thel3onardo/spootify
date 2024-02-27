import { Job, Worker } from "bullmq";
import { FastifyBaseLogger } from "fastify";

export const setupMailWorker = (logger: FastifyBaseLogger) => {
  const mailWorker = new Worker(
    "mail",
    async (job: Job) => {
      logger.debug({ jobData: job.data });

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

  mailWorker.on("completed", (job, returnedValue) => {
    console.log("job finished", returnedValue, job);
  });
};
