<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Icon from '@iconify/svelte';
  import { createSlider, melt, type CreateSliderProps } from '@melt-ui/svelte';
  import IconButton from '$lib/ui/components/button/IconButton.svelte';
  import { secondsToMinutes } from '$lib/utils';
  import { trackStore } from '$lib/stores/track';

  const dispatcher = createEventDispatcher();

  const emitNewSliderValue: CreateSliderProps['onValueChange'] = ({
    curr,
    next,
  }) => {
    //TODO: maybe one of the two value below can be NaN and cause bugs.
    const currentTime = Math.floor(curr[0]);
    const nextTime = Math.floor(next[0]);

    if (nextTime !== currentTime + 1 && nextTime !== currentTime) {
      dispatcher('setTrackTime', {
        value: next[0],
      });
    }

    return next;
  };

  const {
    elements: { root, range, thumb },
    states: { value: sliderValue },
  } = createSlider({
    defaultValue: [0],
    max: 100,
    step: 1,
    onValueChange: emitNewSliderValue,
  });

  $: sliderValue.set([progressValue]);

  export let progressValue: number;
</script>

<div class="flex grow flex-col items-center justify-center">
  <div class="flex items-center gap-x-6 text-gray-500">
    <IconButton
      icon="ph:shuffle-bold"
      tooltipLabel="Random"
      class="hover:text-white"
      size="1.3rem"
    />

    <div class="mx-4 flex items-center gap-x-6">
      <IconButton
        icon="fluent:arrow-previous-12-filled"
        tooltipLabel="Previous"
        class="hover:text-white"
      />
      <button
        on:click={() => dispatcher('pause')}
        class="cursor-pointer select-none rounded-full bg-white p-1 text-black"
      >
        <Icon
          icon={$trackStore.playing
            ? 'ic:round-pause'
            : 'ic:baseline-play-arrow'}
          width="1.8rem"
          height="1.8rem"
          draggable="false"
        />
      </button>
      <IconButton
        icon="fluent:arrow-next-12-filled"
        tooltipLabel="Next"
        class="hover:text-white"
      />
    </div>

    <IconButton
      icon="ph:repeat-bold"
      tooltipLabel="Repeat"
      class="hover:text-white"
      size="1.3rem"
    />
  </div>

  <div
    class="mt-3 flex w-full max-w-[700px] items-center font-manrope text-xs font-medium text-gray-500"
  >
    <span>{secondsToMinutes($trackStore.currentTime)}</span>
    <span
      use:melt={$root}
      class="group relative mx-3 flex h-[10px] w-full grow items-center"
    >
      <span class="block h-[4px] w-full rounded bg-gray-500/40">
        <span
          use:melt={$range}
          class="h-[4px] rounded bg-white group-hover:bg-primary"
        />
      </span>
      <span
        use:melt={$thumb()}
        class="block h-3 w-3 rounded-full bg-white focus:ring-4 focus:ring-black/40"
      />
    </span>
    <span>{secondsToMinutes($trackStore.totalTime)}</span>
  </div>
</div>
