export const uploadImage = async (
  server: any,
  imageBase64: string,
  fileName: string,
) => {
  try {
    const image = await server.imageKit.upload({
      file: imageBase64,
      fileName,
    });

    return image;
  } catch (err) {
    server.log.info("catch in storage.ts");
    server.log.error({ err });
  }
};
