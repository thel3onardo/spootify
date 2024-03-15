import { FastifyReply, FastifyRequest } from "fastify";
import { CreateTrackInput, GetTrackResponse } from "./track.schema";
import { Prisma } from "@prisma/client";
import { parseBuffer } from "music-metadata";
import { Client, Storage, ID, InputFile } from "node-appwrite";

export async function getTrackByID(
  req: FastifyRequest<{ Params: { id: number }; Body: GetTrackResponse }>,
  rep: FastifyReply,
) {
  const { id } = req.params;

  try {
    const result = await rep.server.prisma.track.findFirstOrThrow({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        name: true,
        coverImage: true,
        createdAt: true,
        updatedAt: true,
        artist: {
          select: {
            id: true,
            name: true,
          },
        },
        metadata: {
          select: {
            audioUrl: true,
            duration: true,
          },
        },
      },
    });

    //TODO: remove mock data
    rep
      .status(200)
      .send({ status: "success", data: { ...result, favorite: true } });
  } catch (err) {
    req.log.error(err);
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        return rep.status(404).send({ message: "Track not found" });
      }
    }
    rep.status(500).send({ error: err });
  }
}

export async function getTrackMetadataByID(
  req: FastifyRequest<{ Params: { id: number } }>,
  rep: FastifyReply,
) {
  const params = req.params;
  const id = Number(params.id);

  try {
    const { metadata } = await rep.server.prisma.track.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        metadata: {
          where: {
            trackId: id,
          },
          select: {
            audioUrl: true,
            duration: true,
          },
        },
      },
    });

    rep.status(200).send({ status: "success", data: metadata });
  } catch (err) {
    req.log.error(err);
    rep.status(500).send({ error: err });
  }
}

export async function createTrack(
  req: FastifyRequest<{ Body: CreateTrackInput }>,
  rep: FastifyReply,
) {
  const { audioFile, name, artistId, albumId } = req.body;

  const bucketID = "658337c8dfcbd522bb9e";
  const projectID = "658336c3b2210d7d3669";

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(projectID)
    .setKey(
      "d80dbfe80b5e8f25c90d9b96c8847a0ffca8036291858896adf79c9cc4edaa6e9ecdba6da7c2fc562fb3ecc525719903dc99a2781d9fe6866beef79233bd7b2fcdf2deee442ddf31f6102ead454e8fee2b83b3abc0d23485c115e4d5efe2e4258dbf967c2f2d4747456605cba12585402f9eb2821bc1fb8cf6066e90e677aec8",
    );

  const storage = new Storage(client);

  const file = await storage.createFile(
    bucketID,
    ID.unique(),
    InputFile.fromBuffer(audioFile.data, req.body.name),
  );

  rep.log.info({ file });

  const audioUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketID}/files/${file.$id}/view?project=${projectID}`;

  //get audioFile duration
  const parsedAudioFile = await parseBuffer(
    audioFile.data,
    { mimeType: "audio/mpeg" },
    { duration: true },
  );

  const imageUrl =
    "https://cloud.appwrite.io/v1/storage/buckets/658337af15a76d0214a2/files/65835baf48e08cc11998/view?project=658336c3b2210d7d3669&mode=admin";
  // const audioUrl =
  //   "https://cloud.appwrite.io/v1/storage/buckets/658337c8dfcbd522bb9e/files/658339eebe6c1ebff7c3/view?project=658336c3b2210d7d3669&mode=admin";
  try {
    const track = await rep.server.prisma.track.create({
      data: {
        coverImage: imageUrl,
        name,
        artistId,
        albumId,
      },
    });

    await rep.server.prisma.trackMetadata.create({
      data: {
        trackId: track.id,
        audioUrl,
        duration: parsedAudioFile.format.duration ?? 0,
      },
    });

    rep.status(201).send({ message: "New track successfully created!" });
  } catch (err) {
    req.log.error(err);

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2003") {
        return rep
          .status(401)
          .send({ error: "There is no user with the userID value provided." });
      }
      return rep.status(401).send({ error: err.message });
    }
    rep.status(500).send({ error: err });
  }
}

//TODO: implement function below
export async function deleteTrackHandler(
  request: FastifyRequest<{ Params: { id: number } }>,
  rep: FastifyReply,
) {
  // const { id } = request.params;
  // reply.code(200).send({ id });
}

export async function testStuff(req: FastifyRequest, rep: FastifyReply) {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("658336c3b2210d7d3669");
  const storage = new Storage(client);
  const preview = await storage.getFilePreview(
    "658337af15a76d0214a2",
    "2321",
    200,
    200,
  );

  rep.status(200).send({ preview });
}

// export async function addTrackToCollectionById(
//   req: FastifyRequest<{
//     Params: { collectionId: string };
//     Body: AddTrackToCollection;
//   }>,
//   rep: FastifyReply,
// ) {
//   const { collectionId } = req.params;
//   const { trackId } = req.body;

//   try {
//     await rep.server.prisma.trackOnCollection.create({
//       data: {
//         trackId,
//         collectionId,
//       },
//     });
//     rep
//       .status(201)
//       .send({ status: "success", message: "Song added to collection" });
//   } catch (error) {
//     rep.log.error(error);

//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//       if (error.code === "P2002") {
//         rep.status(409).send({ error: "Track already exists in collection" });
//       }

//       return rep.status(500).send({ error: error.message });
//     }

//     rep.status(500).send({ error });
//   }

//   rep.status(200).send({ status: "success", collectionId });
// }

// export async function removeTrackFromCollectionById(
//   req: FastifyRequest<{
//     Params: { collectionId: string };
//     Body: { trackId: number };
//   }>,
//   rep: FastifyReply,
// ) {
//   const { collectionId } = req.params;
//   const { trackId } = req.body;

//   await rep.server.prisma.trackOnCollection.delete({
//     where: {
//       collectionId,
//       trackId,
//     },
//   });
// }
