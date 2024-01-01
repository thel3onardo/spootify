<script lang="ts">
  import { createSlider, melt } from '@melt-ui/svelte';
  import { playingNowMenuVisible } from '$lib/stores/layout';
  import { slide } from 'svelte/transition';

  import IconButton from '../components/button/IconButton.svelte';
  import { trackStore } from '$lib/stores/track';

  let volumeSliderVisible = false;

  const togglePlayingNowMenu = () => {
    $playingNowMenuVisible = !$playingNowMenuVisible;
  };

  const expandVolumeSlider = () => {
    volumeSliderVisible = !volumeSliderVisible;
  };

  const setTrackVolume = ({ curr, next }) => {
    if (!$trackStore.audioEl) return;
    $trackStore.audioEl.volume = next / 100;

    return next;
  };

  const {
    elements: { root, range, thumb },
  } = createSlider({
    defaultValue: [40],
    max: 100,
    orientation: 'vertical',
    onValueChange: setTrackVolume,
  });
</script>

<div class="flex gap-x-4">
  <IconButton
    on:click={togglePlayingNowMenu}
    tooltipLabel="Playing now"
    icon="mdi:music-box"
    size="1.35rem"
    hoverBg
  />

  <div class="relative">
    {#if volumeSliderVisible}
      <div
        transition:slide={{ axis: 'y', duration: 200 }}
        class="absolute bottom-12 right-1/4 rounded-lg bg-gray-900 px-3 py-2"
      >
        <span
          use:melt={$root}
          class="flex h-[100px] w-[3px] flex-col items-center overflow-hidden"
        >
          <span class="h-full w-full bg-black/40">
            <span use:melt={$range} class="w-[3px] bg-white" />
          </span>
          <span
            use:melt={$thumb()}
            class="h-4 w-4 rounded-full bg-white focus:ring-4 focus:!ring-black/40"
          />
        </span>
      </div>
    {/if}

    <IconButton
      on:click={expandVolumeSlider}
      tooltipLabel="Volume"
      icon="material-symbols:volume-up-rounded"
      size="1.35rem"
      hoverBg
    />
  </div>

  <IconButton
    on:click={() => ''}
    tooltipLabel="Lyrics"
    icon="material-symbols:lyrics"
    size="1.35rem"
    hoverBg
  />

  <IconButton
    on:click={() => ''}
    tooltipLabel="Help"
    icon="material-symbols:info-outline-rounded"
    size="1.35rem"
    hoverBg
  />
</div>
