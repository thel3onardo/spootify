declare module "fastify" {
  interface FastifyInstance {
    config: {
      PORT: number;
      JWT_SECRET: string;
    };
  }
}

const schema = {
  type: "object",
  required: ["PORT", "JWT_SECRET"],
  properties: {
    PORT: {
      type: "number",
      default: 4000,
    },
    JWT_SECRET: {
      type: "string",
    },
  },
};

const envConfig = {
  confKey: "config",
  schema,
  dotenv: true,
};

export { envConfig };
