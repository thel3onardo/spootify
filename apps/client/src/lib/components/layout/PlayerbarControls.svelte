<script lang="ts">
  import { createSlider, melt } from '@melt-ui/svelte';

  import Icon from '@iconify/svelte';
  import IconButton from '../IconButton.svelte';

  const {
    elements: { root, range, thumb },
  } = createSlider({
    defaultValue: [30],
    max: 100,
    step: 1,
  });

  let playing = true;
  let currentTime = '1:25';
  let trackTime = '3:00';
</script>

<div class="flex flex-col items-center justify-center grow">
  <div class="flex items-center gap-x-6 text-gray-500">
    <IconButton
      icon="fe:random"
      tooltipLabel="Random"
      class="hover:text-white"
      size="1.5rem"
    />

    <div class="flex items-center mx-4 gap-x-6">
      <IconButton
        icon="fluent:arrow-previous-12-filled"
        tooltipLabel="Previous"
        class="hover:text-white"
      />
      <div
        class="bg-white rounded-full p-1 text-black cursor-pointer select-none"
      >
        <Icon
          icon={playing ? 'ic:round-pause' : 'ic:baseline-play-arrow'}
          width="1.8rem"
          height="1.8rem"
          draggable="false"
        />
      </div>
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
    class="flex items-center mt-3 text-xs font-manrope font-bold text-gray-500 w-full max-w-[700px]"
  >
    <span>{currentTime}</span>
    <span
      use:melt={$root}
      class="relative flex h-[10px] w-full items-center grow mx-3 group"
    >
      <span class="block h-[4px] w-full bg-gray-500/40 rounded">
        <span
          use:melt={$range}
          class="h-[4px] bg-white rounded group-hover:bg-primary"
        />
      </span>
      <span
        use:melt={$thumb()}
        class="block h-3 w-3 rounded-full bg-white focus:ring-4 focus:ring-black/40"
      />
    </span>

    <!-- <div class="h-[4px] w-full mx-3 bg-gray-500/40 rounded grow relative group">
      <div
        class="relative bg-white left-0 top-0 h-full w-2/4 rounded group-hover:bg-primary before:content-[''] before:w-[12px] before:h-[12px] before:rounded-full before:bg-white before:absolute before:left-[99%] before:-translate-y-1/4 before:hidden group-hover:before:block"
      ></div>
    </div> -->
    <span>{trackTime}</span>
  </div>
</div>
