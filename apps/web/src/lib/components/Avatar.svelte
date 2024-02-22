<script lang="ts">
  import { createAvatar, melt } from '@melt-ui/svelte';

  export let src: string;

  const {
    elements: { image, fallback },
    states: { loadingStatus },
  } = createAvatar({
    src,
  });
</script>

<div class="flex items-center justify-center rounded-full {$$props.class}">
  {#if $loadingStatus === 'loading'}
    <div class="h-full w-full rounded-[inherit] bg-gray-800" />
  {:else if $loadingStatus === 'error'}
    <span use:melt={$fallback} class="text-magnum-700 text-3xl font-medium"
      >RH</span
    >
  {:else if $loadingStatus === 'loaded'}
    <img
      use:melt={$image}
      alt="Avatar"
      class="h-full w-full rounded-[inherit] object-cover"
    />
  {/if}
</div>
