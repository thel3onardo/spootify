import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const userRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  artist: z.boolean(),
});

const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type RegisterUserInput = z.infer<typeof userRegisterSchema>;
export type LoginUserInput = z.infer<typeof loginUserSchema>;

export const { schemas: authSchemas, $ref } = buildJsonSchemas(
  {
    userRegisterSchema,
    loginUserSchema,
  },
  { $id: "authSchema" },
);
