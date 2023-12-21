import { FastifyReply, FastifyRequest } from "fastify";
import {
  AddTrackToCollection,
  CreateTrackInput,
  GetTrackResponse,
} from "./track.schema";
import { Prisma } from "@prisma/client";
import { Client, Storage } from "node-appwrite";

export async function getTrackHandler(
  request: FastifyRequest<{ Params: { id: number }; Body: GetTrackResponse }>,
  reply: FastifyReply,
) {
  // const { uuid } = request.params;
  // const track = await getTrackById(reply, uuid);
  // if (!track) reply.code(404).send({ error: "Track not found" });
  // reply.code(200).send({ data: track });
}

export async function createTrack(
  req: FastifyRequest<{ Body: CreateTrackInput }>,
  rep: FastifyReply,
) {
  // const bucketID = "658337af15a76d0214a2";
  // const projectID = "658336c3b2210d7d3669";

  // const client = new Client()
  //   .setEndpoint("https://cloud.appwrite.io/v1")
  //   .setProject(projectID);

  // const storage = new Storage(client);
  // const file = await storage.createFile(
  //   bucketID,
  //   ID.unique(),
  //   InputFile.fromBuffer(req.body.coverImageFile, "cover"),
  // );
  // const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketID}/files/${file.$id}/view?project=${projectID}`;

  const imageUrl =
    "https://cloud.appwrite.io/v1/storage/buckets/658337af15a76d0214a2/files/65835baf48e08cc11998/view?project=658336c3b2210d7d3669&mode=admin";
  const audioUrl =
    "https://cloud.appwrite.io/v1/storage/buckets/658337c8dfcbd522bb9e/files/658339eebe6c1ebff7c3/view?project=658336c3b2210d7d3669&mode=admin";

  try {
    await rep.server.prisma.track.create({
      data: {
        coverImage: imageUrl,
        audioUrl,
        name: req.body.name,
        authorId: 1,
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

  rep.status(200).send({
    body: imageUrl,
  });
}

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

export async function addTrackToCollectionById(
  req: FastifyRequest<{
    Params: { collectionId: string };
    Body: AddTrackToCollection;
  }>,
  rep: FastifyReply,
) {
  const { collectionId } = req.params;
  const { trackId } = req.body;

  try {
    await rep.server.prisma.trackOnCollection.create({
      data: {
        trackId,
        collectionId,
      },
    });
    rep
      .status(201)
      .send({ status: "success", message: "Song added to collection" });
  } catch (error) {
    rep.log.error(error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        rep.status(409).send({ error: "Track already exists in collection" });
      }

      return rep.status(500).send({ error: error.message });
    }

    rep.status(500).send({ error });
  }

  rep.status(200).send({ status: "success", collectionId });
}

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
