<script lang="ts">
  import IconButton from '$lib/ui/components/button/IconButton.svelte';
  import { createSlider, melt, type CreateSliderProps } from '@melt-ui/svelte';
  import { playingNowMenuVisible } from '$lib/stores/layout';
  import { trackStore, setMute } from '$lib/stores/track';

  let volumeMuted = false;
  let iconSize: '1.2rem';

  const togglePlayingNowMenu = () => {
    $playingNowMenuVisible = !$playingNowMenuVisible;
  };

  const setTrackVolume: CreateSliderProps['onValueChange'] = ({ next }) => {
    $trackStore.audioEl.volume = next[0] / 100;

    return next;
  };

  const {
    elements: { root, range, thumb },
  } = createSlider({
    defaultValue: [40],
    max: 100,
    orientation: 'horizontal',
    onValueChange: setTrackVolume,
  });

  $: volumeMuted = $trackStore.audioEl.volume === 0;
</script>

<div class="flex gap-x-4 text-gray-500">
  <IconButton
    on:click={togglePlayingNowMenu}
    tooltipLabel="Playing now"
    icon="solar:headphones-round-sound-bold"
    size={iconSize}
    hoverBg
    class="hover:text-white"
  />

  <IconButton
    on:click={() => ''}
    tooltipLabel="Lyrics"
    icon="solar:notification-unread-lines-outline"
    size={iconSize}
    hoverBg
    class="hover:text-white"
  />

  <IconButton
    on:click={() => ''}
    tooltipLabel="Help"
    icon="solar:question-square-linear"
    size={iconSize}
    hoverBg
    class="hover:text-white"
  />

  <div class="relative flex items-center gap-x-3">
    <IconButton
      tooltipLabel="Mute"
      icon={volumeMuted
        ? 'solar:volume-cross-linear'
        : 'solar:volume-loud-linear'}
      size={iconSize}
      hoverBg
      class="hover:text-white"
      on:click={() => setMute(!volumeMuted)}
    />

    <span
      use:melt={$root}
      class="group relative flex h-[20px] w-[100px] items-center"
    >
      <span class="h-[4px] w-full rounded-lg bg-gray-800">
        <span
          use:melt={$range}
          class="h-[4px] rounded-lg bg-white group-hover:bg-primary"
        />
      </span>
      <span
        use:melt={$thumb()}
        class="hidden h-3 w-3 rounded-full bg-white focus:ring-4 focus:!ring-black/40 group-hover:block"
      />
    </span>
  </div>
</div>
