<script lang="ts">
  import PlayerbarControls from './PlayerbarControls.svelte';
  import PlayerbarActions from './PlayerbarActions.svelte';
  import FavoriteIcon from '../FavoriteIcon.svelte';

  import { currentTrack } from '$lib/stores/track';

  let track: HTMLAudioElement;
  let playing = false;
  let interval: any;

  let progressBarPercentage = 0;
  let trackDuration = '1:20';
  let trackCurrentTime = '3:00';

  const updateProgressBarPercentage = () => {
    let percentage = track.currentTime / track.duration;

    progressBarPercentage = percentage * 100;
  };
  const setProgressBarInterval = () => {
    interval = setInterval(updateProgressBarPercentage, 1000);

    return interval;
  };

  const togglePlay = () => {
    if (track.paused) {
      track.play();
      playing = true;
      return;
    }
    track.pause();
    playing = false;
  };

  $: playing ? setProgressBarInterval() : clearInterval(interval);
</script>

<audio src="/music.mp3" bind:this={track} />

<div class="flex items-center justify-between gap-x-12 px-4 py-2">
  <div class="group flex items-center gap-x-4">
    <div class="h-[60px] w-[60px] overflow-hidden rounded">
      <img
        src="https://wallpapers-clan.com/wp-content/uploads/2023/01/aesthetic-anime-girl-pfp-9.jpg"
        alt="Music cover's"
      />
    </div>
    <div class="font-manrope text-sm">
      <h3 class="mb-0.5 font-semibold">Hope</h3>
      <p class="text-xs font-medium text-white/70">Old sea bridge</p>
    </div>
    <FavoriteIcon
      favorite={$currentTrack.favorite}
      trackId={$currentTrack.id}
      size="1.2rem"
    />
  </div>
  <PlayerbarControls
    on:pause={togglePlay}
    {playing}
    progressValue={progressBarPercentage}
    currentTime={trackCurrentTime}
    duration={trackDuration}
  />
  <PlayerbarActions />
</div>
