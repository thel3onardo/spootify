import type { IPlaylist } from './interfaces';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  //TODO: make requisition to get data of playlist

  const data: IPlaylist = {
    name: 'Musicas curtidas',
    coverUrl:
      'https://www.creativefabrica.com/wp-content/uploads/2022/12/01/Anime-Girl-HD-Black-Hair-High-Details-Style-Neon-Red-49761904-1.png',
    description: 'The biggest songs of 2010s.',
  };

  return data;
}
