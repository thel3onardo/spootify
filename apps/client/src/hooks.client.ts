import { get } from 'svelte/store';
import { setPlaying, trackStore, updateCurrentTime } from '$lib/stores/track';

(function setupAudioListeners() {
  const audio = get(trackStore).audioEl;

  audio.addEventListener('timeupdate', () => {
    updateCurrentTime(audio.currentTime);
  });

  audio.addEventListener('playing', () => {
    setPlaying(true);
  });

  audio.addEventListener('pause', () => {
    setPlaying(false);
  });
})();
