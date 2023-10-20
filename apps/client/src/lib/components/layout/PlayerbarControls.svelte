<script lang="ts">
  import { createSlider, melt } from '@melt-ui/svelte';
  import { createEventDispatcher } from 'svelte';

  import Icon from '@iconify/svelte';
  import IconButton from '../IconButton.svelte';

  const dispatcher = createEventDispatcher();
  const {
    elements: { root, range, thumb },
    states: { value },
  } = createSlider({
    defaultValue: [50],
    max: 100,
    step: 1,
  });

  $: value.set([progressValue]);

  export let playing: Boolean,
    progressValue: number,
    currentTime: string,
    duration: string;
</script>

<div class="flex grow flex-col items-center justify-center">
  <div class="flex items-center gap-x-6 text-gray-500">
    <IconButton
      icon="fe:random"
      tooltipLabel="Random"
      class="hover:text-white"
      size="1.5rem"
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
          icon={playing ? 'ic:round-pause' : 'ic:baseline-play-arrow'}
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
      icon="mdi:repeat-variant"
      tooltipLabel="Repeat"
      class="hover:text-white"
      size="1.5rem"
    />
  </div>

  <div
    class="mt-3 flex w-full max-w-[700px] items-center font-manrope text-xs font-bold text-gray-500"
  >
    <span>{currentTime}</span>
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
    <span>{duration}</span>
  </div>
</div>
