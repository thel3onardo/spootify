<script lang="ts">
  import Icon from '@iconify/svelte';
  import TrackItem from './TrackItem.svelte';

  const tableSections = ['#', 'Title', 'Album', 'Date added'];
</script>

<div class="text-gray-500 {$$props.class}">
  <div
    class="grid grid-cols-[16px_6fr_4fr_3fr_1fr] gap-4 text-sm font-manrope font-medium border-b border-gray-500/10 py-2 px-4 mb-4"
  >
    {#each tableSections as section}
      <span>{section}</span>
    {/each}
    <!-- TODO: maybe it would be better to render this Icon component in the above each block somehow.-->
    <Icon
      icon="material-symbols:alarm-outline"
      width="1.2rem"
      height="1.2rem"
    />
  </div>
  <div>
    {#each Array(150) as el}
      <TrackItem />
    {/each}
  </div>
</div>
