import type { IPlaylist } from './interfaces';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  //TODO: make requisition to get data of playlist

  const data: IPlaylist = {
    name: 'Musicas curtidas',
    coverUrl:
      'https://img.freepik.com/premium-photo/lofi-anime-girl-wearing-headphones-park-created-using-generative-ai-technology_772924-9844.jpg',
    description: 'The biggest songs of 2010s.',
  };

  return data;
}
