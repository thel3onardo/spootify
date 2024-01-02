import { writable } from 'svelte/store';

interface IState {
  id: number;
  favorite: boolean;
  audioEl: HTMLAudioElement | null;
  currentTime: number;
  totalTime: number;
}

const trackStore = writable<IState>({
  id: 23092,
  favorite: true,
  audioEl: null,
  currentTime: 0,
  totalTime: 0,
});

const setTrack = (body: { url: string; duration: number }) => {
  trackStore.update((track) => {
    if (track.audioEl) {
      track.audioEl.src = body.url;
    }

    return { ...track, totalTime: body.duration };
  });
};

const updateTrackCurrentTime = (percentageValue: number) => {
  trackStore.update((track) => {
    if (!track.audioEl) return { ...track };

    const trackSecondsByPercentage = Math.floor(
      (percentageValue / 100) * track.totalTime,
    );

    track.audioEl.currentTime = trackSecondsByPercentage;

    return { ...track };
  });
};

const updateCurrentTime = (newTime: number) => {
  trackStore.update((track) => {
    return { ...track, currentTime: newTime };
  });
};

export { setTrack, trackStore, updateCurrentTime, updateTrackCurrentTime };
