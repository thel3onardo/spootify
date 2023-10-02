<script lang="ts">
  import IconSearchbar from '$lib/components/IconSearchbar.svelte';
  import IconButton from '$lib/components/IconButton.svelte';

  let filterValue = '';
</script>

<div class="flex flex-col w-full bg-gray-800 px-5 py-4 rounded-lg">
  <div id="my-lib-header" class="flex justify-between text-gray-500">
    <IconButton
      icon="solar:music-library-2-bold"
      tooltipLabel="what"
      size="1.75rem"
    >
      <span class="font-semibold font-inter text-lg ml-3">Your library</span>
    </IconButton>
    <div class="flex gap-x-1">
      <IconButton
        icon="ic:baseline-plus"
        tooltipLabel="Create playlist or folder"
        size="1.5rem"
        hoverBg
      />
      <IconButton
        icon="material-symbols:arrow-forward"
        tooltipLabel="Expand"
        size="1.5rem"
        hoverBg
      />
    </div>
  </div>
  <div class="flex flex-col">
    <div class="flex justify-between">
      <IconSearchbar placeholder="Search" bind:value={filterValue} />
    </div>
  </div>
</div>
