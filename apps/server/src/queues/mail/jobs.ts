import { mailQueue } from ".";

export const sendMail = (email: string) => {
  mailQueue.add("registry", { data: email });
};
