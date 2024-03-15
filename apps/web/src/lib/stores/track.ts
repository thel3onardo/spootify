import { fetchTrackById } from '$lib/repositories/audio';
import { writable } from 'svelte/store';

interface ITrack {
  id: number;
  favorite: boolean;
  name: string;
  author: {
    id: number;
    name: string;
  };
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

//TODO: if this is server side rendered, it will limit stuff
export const playTrack = async (trackId: number) => {
  try {
    const data = await fetchTrackById(trackId);
    const { id, name, favorite, coverImage, author, ...other } = data.data;

    //TODO: implement this with response data typed
    //@ts-ignore
    setTrack({
      id,
      favorite,
      coverImage,
      author,
      name,
      audio: other.metadata,
    });
  } catch (err) {
    //TODO: implement toast
    console.error(err);
  }
};
