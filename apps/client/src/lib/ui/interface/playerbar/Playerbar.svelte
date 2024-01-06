<script lang="ts">
  import { onMount } from 'svelte';
  import { currentTrack } from '$lib/stores/track';
  import PlayerbarControls from './PlayerbarControls.svelte';
  import PlayerbarActions from './PlayerbarActions.svelte';
  import FavoriteButton from '$lib/ui/components/button/FavoriteButton.svelte';

  let audio = new Audio();
  let currentTime = 0;
  let duration = 0;
  let playing = false;
  let volume = 0;
  let progressBarPercentage = 0;

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

    audio.addEventListener('abort', () => {
      playing = false;
      currentTime = 0;
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

  const setAudioSrc = (src: string) => {
    audio.src = src;
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
  });

  $: $currentTrack ? setAudioSrc($currentTrack.audio.audioUrl) : '';
  $: duration = $currentTrack ? $currentTrack.audio.duration : 0;

  //TODO: this is not satisfying, it's not going 1 + 1 sec
  $: progressBarPercentage =
    duration !== 0 ? Math.floor((currentTime / duration) * 100) : 0;
</script>

{#if $currentTrack}
  <div class="flex select-none items-center justify-between gap-x-12 px-4 py-2">
    <div class="group flex items-center gap-x-4">
      <div class="h-[60px] w-[60px] overflow-hidden rounded">
        <img
          src={$currentTrack.coverImage}
          alt={`${$currentTrack.name} cover's`}
        />
      </div>
      <div class="mr-6 font-manrope text-sm">
        <h3 class="mb-0.5 font-semibold">{$currentTrack.name}</h3>
        <p class="text-xs font-medium text-white/70">
          {$currentTrack.author.name}
        </p>
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
