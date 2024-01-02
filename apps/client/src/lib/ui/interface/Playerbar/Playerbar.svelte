<script lang="ts">
  import PlayerbarControls from './PlayerbarControls.svelte';
  import PlayerbarActions from './PlayerbarActions.svelte';
  import FavoriteButton from '$lib/ui/components/button/FavoriteButton.svelte';
  import { currentTrack } from '$lib/stores/track';
  import { onMount } from 'svelte';

  let audio = new Audio();
  let currentTime = 0;
  //TODO: duration should be defined with value from API
  let duration = $currentTrack?.audio.duration;
  let playing = false;
  let volume = 0;

  //TODO: no any here
  let interval: any;
  let progressBarPercentage = 0;

  const updateProgressBarPercentage = () => {
    const percentage = (currentTime / duration) * 100;

    progressBarPercentage = percentage;
  };

  const setProgressBarInterval = () => {
    interval = setInterval(updateProgressBarPercentage, 1000);

    return interval;
  };

  const setupAudioListeners = () => {
    audio.addEventListener('canplaythrough', () => {
      //canplaythrough
    });

    audio.addEventListener('timeupdate', (e) => {
      currentTime = Math.round(audio.currentTime);
    });

    audio.addEventListener('playing', () => {
      playing = true;
    });

    audio.addEventListener('pause', () => {
      playing = false;
    });

    audio.addEventListener('volumechange', (e) => {
      volume = audio.volume;
    });
  };

  const setupInitialVolume = () => {
    //TODO: get this from localStorage
    audio.volume = 0.4;
    volume = 0.4;
  };

  const togglePlay = () => {
    playing ? audio.pause() : audio.play();
  };

  const setVolume = (e: CustomEvent) => {
    audio.volume = e.detail.volume / 100;
  };

  const mute = () => {
    audio.volume = 0;
  };

  const unmute = () => {
    audio.volume = 0.4;
  };

  onMount(() => {
    setupAudioListeners();
    setupInitialVolume();

    if ($currentTrack) {
      audio.src = $currentTrack.audio.audioUrl;
    }
  });
</script>

{#if $currentTrack}
  <div class="flex items-center justify-between gap-x-12 px-4 py-2">
    <div class="group flex items-center gap-x-4">
      <div class="h-[60px] w-[60px] overflow-hidden rounded">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/4/48/Utopia_-_Travis_Scott.png"
          alt="Music cover's"
        />
      </div>
      <div class="mr-6 font-manrope text-sm">
        <h3 class="mb-0.5 font-semibold">SIRENS</h3>
        <p class="text-xs font-medium text-white/70">Travis Scottt</p>
      </div>
      <FavoriteButton
        favorite={$currentTrack.favorite}
        trackId={$currentTrack.id}
        size="1.3rem"
      />
    </div>
    <PlayerbarControls
      on:togglePlay={togglePlay}
      progressValue={progressBarPercentage}
      {playing}
      {duration}
      {currentTime}
    />
    <PlayerbarActions
      muted={volume === 0}
      sliderValue={volume}
      on:newVolume={setVolume}
      on:mute={mute}
      on:unmute={unmute}
    />
  </div>
{/if}
