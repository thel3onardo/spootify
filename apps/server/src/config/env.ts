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
    IMAGEKIT_PUBLIC_KEY: {
      type: "string",
    },
    IMAGEKIT_PRIVATE_KEY: {
      type: "string",
    },
    DATABASE_URL: {
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
