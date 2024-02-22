<script lang="ts">
  import SkeletonLoader from '$lib/ui/components/SkeletonLoader.svelte';
  import { createAvatar, melt } from '@melt-ui/svelte';
  import { twMerge } from 'tailwind-merge';

  export let src: string;

  const {
    elements: { image, fallback },
    states: { loadingStatus },
  } = createAvatar({
    src,
  });
</script>

<div
  class={twMerge(
    'relative flex items-center justify-center rounded-full',
    $$props.class,
  )}
>
  {#if $loadingStatus === 'loading'}
    <SkeletonLoader class="left-0 top-0 rounded-[inherit] bg-gray-800/40" />
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
