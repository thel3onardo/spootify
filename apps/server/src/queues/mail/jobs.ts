import { mailQueue } from ".";
import { AnotherJobData } from "./workers";

export const sendMail = (JobData: AnotherJobData) => {
  mailQueue.add("sendEmailJob", { ...JobData });
};
