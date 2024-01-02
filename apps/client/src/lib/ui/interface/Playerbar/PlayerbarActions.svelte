<script lang="ts">
  import IconButton from '$lib/ui/components/button/IconButton.svelte';
  import { createSlider, melt, type CreateSliderProps } from '@melt-ui/svelte';
  import { playingNowMenuVisible } from '$lib/stores/layout';
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatcher = createEventDispatcher();

  let iconSize: '1.2rem';

  export let muted: boolean, sliderValue: number;

  //TODO: This should be converted to a top-level function
  const togglePlayingNowMenu = () => {
    $playingNowMenuVisible = !$playingNowMenuVisible;
  };

  const emitNewVolume = (value: number) => {
    dispatcher('newVolume', {
      volume: value,
    });
  };

  const emitMute = () => {
    dispatcher('mute', true);
  };

  const emitUnmute = () => {
    dispatcher('unmute', true);
  };

  const setVolume: CreateSliderProps['onValueChange'] = ({ next }) => {
    emitNewVolume(next[0]);

    return next;
  };

  const {
    elements: { root, range, thumb },
    states: { value },
  } = createSlider({
    defaultValue: [sliderValue],
    max: 100,
    orientation: 'horizontal',
    onValueChange: setVolume,
  });

  $: value.set([sliderValue * 100]);
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
      icon={muted ? 'solar:volume-cross-linear' : 'solar:volume-loud-linear'}
      size={iconSize}
      hoverBg
      class="hover:text-white"
      on:click={muted ? emitUnmute() : emitMute()}
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
