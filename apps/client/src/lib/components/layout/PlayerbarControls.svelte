<script lang="ts">
  import Icon from '@iconify/svelte';
  import IconButton from '../IconButton.svelte';

  let playing = true;
</script>

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
