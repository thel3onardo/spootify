<script lang="ts">
  import Icon from '@iconify/svelte';
  import IconButton from '../IconButton.svelte';

  let currentTime = '1:20';
  let tracktime = '3:20';
  let playing = true;
</script>

<div class="flex items-center flex-col">
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
      <div class="bg-white rounded-full p-1 text-black cursor-pointer">
        <Icon
          icon={playing ? 'ic:round-pause' : 'ic:baseline-play-arrow'}
          width="1.8rem"
          height="1.8rem"
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
    class="flex items-center mt-3 text-xs font-manrope font-medium text-gray-500"
  >
    <span>{currentTime}</span>
    <div
      class="h-[4px] w-[300px] mx-3 bg-gray-500/40 rounded grow relative before:content-[''] before:absolute before:bg-white before:left-0 before:h-full before:w-2/4 before:rounded"
    />
    <span>{tracktime}</span>
  </div>
</div>
