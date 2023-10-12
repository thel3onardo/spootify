import { writable } from 'svelte/store';

export let currentTrack = writable({
  id: 234234,
  favorite: true,
});
