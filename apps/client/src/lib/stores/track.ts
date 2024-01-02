import { writable } from 'svelte/store';

interface ITrack {
  id: number;
  favorite: boolean;
  name: string;
  author: string;
  coverImage: string;
  audio: {
    audioUrl: string;
    duration: number;
  };
}

export const currentTrack = writable<ITrack | null>(null);

export const setTrack = ({
  id,
  name,
  author,
  favorite,
  coverImage,
  audio,
}: ITrack) => {
  currentTrack.update((track) => {
    return {
      id,
      name,
      author,
      favorite,
      coverImage,
      audio,
    };
  });
};

export const removeTrack = () => {
  currentTrack.update((track) => {
    return null;
  });
};
