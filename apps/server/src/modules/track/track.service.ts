// import { FastifyReply } from "fastify";
// import { CreateTrackInput, GetTrackResponse } from "./track.schema";

// export async function createTrack(
//   reply: FastifyReply,
//   input: CreateTrackInput,
// ) {
//   //TODO: get authorId value by JWT token
//   const authorId = 1;
//   const data = { authorId, ...input };
//   // const track = await reply.server.prisma.track.create({
//   //   data,
//   // });
//   const track = { data };

//   return track;
// }

// export async function getTrackById(
//   reply: FastifyReply,
//   id: number,
// ): Promise<GetTrackResponse | null> {
//   const track = await reply.server.prisma.track.findUnique({
//     where: {
//       id,
//     },
//     select: {
//       id: true,
//       name: true,
//       coverImage: true,
//       author: {
//         select: {
//           id: true,
//           name: true,
//         },
//       },
//     },
//   });

//   return track;
// }
