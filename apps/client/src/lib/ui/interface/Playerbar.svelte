<script lang="ts">
  import PlayerbarControls from './PlayerbarControls.svelte';
  import PlayerbarActions from './PlayerbarActions.svelte';
  import FavoriteButton from '../components/button/FavoriteButton.svelte';

  import { trackStore } from '$lib/stores/track';

  let playing = false;
  let interval: any;

  let progressBarPercentage = 0;

  const updateProgressBarPercentage = () => {
    if (!$trackStore.audioEl) return;
    let percentage =
      $trackStore.audioEl.currentTime / $trackStore.audioEl.duration;

    progressBarPercentage = percentage * 100;
  };

  const setProgressBarInterval = () => {
    interval = setInterval(updateProgressBarPercentage, 1000);

    return interval;
  };

  const togglePlay = () => {
    if (!$trackStore.audioEl) return;
    if ($trackStore.audioEl.paused) {
      $trackStore.audioEl.play();
      playing = true;
      return;
    }
    $trackStore.audioEl.pause();
    playing = false;
  };

  $: playing ? setProgressBarInterval() : clearInterval(interval);
</script>

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
    <FavoriteButton
      favorite={$trackStore.favorite}
      trackId={$trackStore.id}
      size="1.2rem"
    />
  </div>
  <PlayerbarControls
    on:pause={togglePlay}
    {playing}
    progressValue={progressBarPercentage}
    currentTime={$trackStore.audioEl?.currentTime}
    duration={$trackStore.audioEl?.duration}
  />
  <PlayerbarActions />
</div>
