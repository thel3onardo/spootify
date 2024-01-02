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
        name: true,
        coverImage: true,
        createdAt: true,
        updatedAt: true,
        author: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    rep.status(200).send({ status: "success", data: result });
  } catch (err) {
    req.log.error(err);
    rep.status(500).send({ error: err });
  }
}

export async function getTrackAudioByID(
  req: FastifyRequest<{ Params: { id: number } }>,
  rep: FastifyReply,
) {
  const params = req.params;
  const id = Number(params.id);

  try {
    const result = await rep.server.prisma.track.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        TrackAudio: {
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

    rep.status(200).send({ status: "success", data: result.TrackAudio });
  } catch (err) {
    req.log.error(err);
    rep.status(500).send({ error: err });
  }
}

export async function createTrack(
  req: FastifyRequest<{ Body: CreateTrackInput }>,
  rep: FastifyReply,
) {
  const audioFile = req.body.audioFile;

  const bucketID = "658337c8dfcbd522bb9e";
  const projectID = "658336c3b2210d7d3669";

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(projectID)
    .setKey(
      "deadc5291a1415771c87923de066f3eba71f3c12cd85e528ecf17e96b63433f10f77d0ab13203cae1038702ad371c9abbf1f1981d555f7d280427b6b6b4057cc55d1e931f91cff1ce04d0dd189353cf7f931b2b8a91572d25284bccb5e3e4c60c6b56a2c9d5352af6db7a5639c81e390e7cdfffd9c8798ca3ba996db2a902d56",
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
        name: req.body.name,
        authorId: 1,
      },
    });

    await rep.server.prisma.trackAudio.create({
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
