import { Queue } from "bullmq";

export const mailQueue = new Queue("mail", {
  prefix: "mail",
  connection: {
    host: "localhost",
    port: 6379,
  },
});
