import { trackStore, updateCurrentTime } from '$lib/stores/track';

export const initializePlayer = () => {
  const audio = new Audio();

  //check for volume value in localStorage
  audio.volume = 0.25;

  audio.addEventListener('canplaythrough', () => {
    trackStore.update((track) => {
      return { ...track, audioEl: audio };
    });
  });

  audio.addEventListener('timeupdate', () => {
    updateCurrentTime(audio.currentTime)
  });

  trackStore.update((track) => {
    return { ...track, audioEl: audio }
  })
};
