import type { IPlaylist } from './types.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  //TODO: make requisition to get data of playlist

  const data: IPlaylist = {
    name: 'Musicas curtidas',
    coverUrl:
      'https://preview.redd.it/j2ink51mnxz51.jpg?auto=webp&s=040889cb6a1bfa825a4736afa128421009ba12a6',
    description: 'The biggest songs of 2010s.',
  };

  return data;
}
