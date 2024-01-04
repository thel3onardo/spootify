import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const signUpUser = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
  birthDate: z.string().datetime(),
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
