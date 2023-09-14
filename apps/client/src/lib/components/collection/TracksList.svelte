<script lang="ts">
  import Icon from '@iconify/svelte';
  import TrackItem from './TrackItem.svelte';
</script>

<div class="text-gray-500 {$$props.class}">
  <div
    class="grid grid-cols-[16px_6fr_4fr_3fr_1fr] gap-4 text-sm font-manrope font-medium border-b border-gray-500/10 py-2 px-4 mb-4"
  >
    <span>#</span>
    <span>Title</span>
    <span>Album</span>
    <span>Date added</span>
    <span
      ><Icon
        icon="material-symbols:alarm-outline"
        width="1.2rem"
        height="1.2rem"
      /></span
    >
  </div>
  <div>
    {#each Array(150) as el}
      <TrackItem />
    {/each}
  </div>
</div>
