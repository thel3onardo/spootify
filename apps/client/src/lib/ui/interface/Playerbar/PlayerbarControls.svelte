<script lang="ts">
  import { createSlider, melt, type CreateSliderProps } from '@melt-ui/svelte';
  import IconButton from '$lib/ui/components/button/IconButton.svelte';
  import { secondsToMinutes } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';

  const dispatcher = createEventDispatcher();

  const emitTogglePlay = () => {
    dispatcher('togglePlay');
  };

  const {
    elements: { root, range, thumb },
    states: { value: sliderValue },
  } = createSlider({
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
  });

  $: sliderValue.set([progressValue]);

  export let progressValue: number,
    duration: number,
    currentTime: number,
    playing: boolean;
</script>

<div class="flex grow flex-col items-center justify-center">
  <div class="flex items-center gap-x-6 text-gray-500">
    <IconButton
      icon="ph:shuffle-bold"
      tooltipLabel="Random"
      class="hover:text-white"
      size="1.3rem"
    />

    <div class="mx-2 flex items-center gap-x-4">
      <IconButton
        icon="fluent:arrow-previous-12-filled"
        tooltipLabel="Previous"
        class="hover:text-white p-2"
      />
      <IconButton
        on:click={emitTogglePlay}
        tooltipLabel="Toggle play"
        class="p-1 select-none rounded-full bg-white text-black cursor-default active:scale-90 transition"
        icon={playing ? 'ic:round-pause' : 'ic:baseline-play-arrow'}
        iconSize="1.5rem"
      />
      <IconButton
        icon="fluent:arrow-next-12-filled"
        tooltipLabel="Next"
        class="hover:text-white p-1"
      />
    </div>

    <IconButton
      icon="ph:repeat-bold"
      tooltipLabel="Repeat"
      class="hover:text-white"
    />
  </div>

  <div
    class="mt-2 flex w-full max-w-[700px] items-center font-manrope text-xs font-semibold text-gray-500"
  >
    <span>{secondsToMinutes(currentTime)}</span>
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
    <span>{secondsToMinutes(duration)}</span>
  </div>
</div>
