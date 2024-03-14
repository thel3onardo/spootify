import { FastifyPluginAsync } from "fastify";
import { fastifyPlugin } from "fastify-plugin";
import ImageKit from "imagekit";

const imageKitPlugin: FastifyPluginAsync = fastifyPlugin(async (server) => {
  try {
    const imageKit = new ImageKit({
      publicKey: server.config.IMAGEKIT_PUBLIC_KEY,
      privateKey: server.config.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: server.config.IMAGEKIT_URL_ENDPOINT,
    });

    server.decorate("imageKit", imageKit);
  } catch (err) {
    server.log.error(err);
  }
});

export { imageKitPlugin };
