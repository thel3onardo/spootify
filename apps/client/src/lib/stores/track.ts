import { writable } from 'svelte/store';

interface IState {
  id: number;
  favorite: boolean;
  audioEl: HTMLAudioElement;
  currentTime: number;
  totalTime: number;
  playing: boolean;
}

const trackStore = writable<IState>({
  id: 23092,
  favorite: true,
  audioEl: new Audio(),
  currentTime: 0,
  totalTime: 0,
  playing: false,
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

    console.log({ trackSecondsByPercentage });

    track.audioEl.currentTime = trackSecondsByPercentage;

    return { ...track };
  });
};

const updateCurrentTime = (newTime: number) => {
  trackStore.update((track) => {
    return { ...track, currentTime: newTime };
  });
};

const setMute = (muted: boolean) => {
  trackStore.update((track) => {
    track.audioEl.volume = muted ? 0 : 1;

    return { ...track };
  });
};

const setPlaying = (playing: boolean) => {
  trackStore.update((track) => {
    return { ...track, playing };
  });
};

export {
  setTrack,
  trackStore,
  updateCurrentTime,
  updateTrackCurrentTime,
  setMute,
  setPlaying,
};
