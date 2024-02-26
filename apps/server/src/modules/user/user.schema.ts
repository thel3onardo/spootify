import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const signUpUser = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string(),
  name: z.string().min(2).max(24),
  username: z.string().min(2).max(16),
  birthDate: z
    .string()
    .datetime({ message: "Invalid birthDate. Expected: ISO 8601 format" }),
});

const signInUser = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type SignUpUser = z.infer<typeof signUpUser>;
export type SignInUser = z.infer<typeof signInUser>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas(
  {
    signUpUser,
    signInUser,
  },
  { $id: "userSchema" },
);
