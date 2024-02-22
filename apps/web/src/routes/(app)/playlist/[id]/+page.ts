import { collectionRepository } from '$lib/repositories/index.js';
import { redirect } from '@sveltejs/kit';

export interface IPlaylist {
  name: string;
  coverUrl: string;
  description: string;
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const res = await collectionRepository.getCollectionById(params.id);
  const data = await res.json();

  //TODO: validate data
  //TODO: improve this, data.data seems bad
  return {
    ...data.data,
    playlistOwner: true,
    playlistId: params.id,
  };
}
