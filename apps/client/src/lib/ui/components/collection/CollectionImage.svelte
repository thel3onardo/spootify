<script lang="ts">
  import Icon from '@iconify/svelte';
  import { FastAverageColor } from 'fast-average-color';
  import { createEventDispatcher, onMount } from 'svelte';

  export let src: string,
    alt: string,
    shadow = false;

  let imageHovered = false;

  const dispatch = createEventDispatcher();
  const emitOpenDialog = () => {
    dispatch('openDialog', true);
  };
</script>

<div
  class:image-shadow={shadow}
  class="w-full grow overflow-hidden rounded-lg {$$props.class}"
>
  {#if src}
    <img
      crossorigin="anonymous"
      {src}
      {alt}
      class="h-full w-full object-cover"
    />
  {:else}
    <button
      on:mouseenter={() => (imageHovered = true)}
      on:mouseleave={() => (imageHovered = false)}
      on:click={emitOpenDialog}
      class="flex h-full w-full cursor-default items-center justify-center bg-neutral-800 text-neutral-500"
    >
      {#if imageHovered}
        <div class="flex flex-col items-center gap-y-2 text-neutral-50">
          <Icon icon="ph:image" width="3rem" height="3rem" />
          <span class="font-semibold">Choose photo</span>
        </div>
      {:else}
        <Icon icon="ph:music-notes" width="5rem" height="5rem" />
      {/if}
    </button>
  {/if}
</div>

<style>
  .image-shadow {
    box-shadow: 0px 0px 5rem 1rem rgba(10, 10, 10, 0.5);
  }
</style>
