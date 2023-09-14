<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<div class="text-gray-500 {$$props.class}">
  <div class="px-4 py-2 border-b border-gray-500/10">
    <div
      class="grid grid-cols-[16px_6fr_4fr_3fr_1fr] gap-4 text-sm font-manrope font-medium"
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
  </div>
</div>
