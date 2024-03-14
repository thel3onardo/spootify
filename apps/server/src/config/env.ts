const schema = {
  type: "object",
  required: [
    "DATABASE_URL",
    "PORT",
    "IMAGEKIT_PUBLIC_KEY",
    "IMAGEKIT_PRIVATE_KEY",
    "IMAGEKIT_URL_ENDPOINT",
  ],
  properties: {
    PORT: {
      type: "number",
    },
    JWT_SECRET: {
      type: "string",
      default: "",
    },
    IMAGEKIT_PUBLIC_KEY: {
      type: "string",
    },
    IMAGEKIT_PRIVATE_KEY: {
      type: "string",
    },
    IMAGEKIT_URL_ENDPOINT: {
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
