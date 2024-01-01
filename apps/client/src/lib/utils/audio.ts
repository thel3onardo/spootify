import { trackStore } from '$lib/stores/track';

export const initializePlayer = () => {
  const audio = new Audio();

  audio.volume = 0.25;
  audio.src =
    'https://cloud.appwrite.io/v1/storage/buckets/658337c8dfcbd522bb9e/files/658339eebe6c1ebff7c3/view?project=658336c3b2210d7d3669&mode=admin';

  audio.addEventListener('canplaythrough', () => {
    trackStore.update((track) => {
      return { ...track, audioEl: audio };
    });
  });

  audio.addEventListener('timeupdate', () => {
    trackStore.update((track) => {
      return { ...track, currentTime: audio.currentTime };
    });
  });
};
