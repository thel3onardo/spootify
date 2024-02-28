import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(2),
  confirmPassword: z.string().min(2),
  bornDate: z.date(),
});

//this can be either an email or username (find a way to validate both scnearios)
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  refreshSessions: z.boolean().default(false),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;

export const { schemas: authSchemas, $ref } = buildJsonSchemas({
  registerSchema,
  loginSchema,
});
