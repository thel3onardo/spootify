import { writable } from 'svelte/store';

interface IState {
  id: number;
  favorite: boolean;
  audioEl: HTMLAudioElement | null;
  currentTime: number;
}

const trackStore = writable<IState>({
  id: 23092,
  favorite: true,
  audioEl: null,
  currentTime: 0,
});

export { trackStore };
