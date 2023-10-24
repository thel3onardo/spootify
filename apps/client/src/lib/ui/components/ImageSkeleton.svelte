<script lang="ts">
  import { onMount } from 'svelte';
  import SkeletonLoader from './SkeletonLoader.svelte';

  export let src: string, alt: string;

  let loading = true;
  let loaded = false;
  let failed = false;

  onMount(() => {
    const img = new Image();

    img.src = src;
    loading = true;

    img.onload = () => {
      loading = false;
      loaded = true;
    };

    img.onerror = () => {
      loading = false;
      failed = true;
    };
  });
</script>

<div class={$$props.class}>
  {#if loaded}
    <img {src} {alt} class="h-full w-full object-cover" />
  {:else if loading}
    <SkeletonLoader />
  {:else if failed}
    <div class="flex h-full w-full items-center justify-center bg-gray-800">
      <p class="font-manrope font-semibold text-white">
        Failed to load this image.
      </p>
    </div>
  {/if}
</div>
