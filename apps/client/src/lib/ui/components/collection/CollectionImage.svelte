<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Icon from '@iconify/svelte';

  export let imageSrc: string, imageAlt: string, playlistOwner: boolean;

  const dispatch = createEventDispatcher();
  const emitClick = () => {
    dispatch('click');
  };
</script>

<div class="group h-full w-full">
  {#if imageSrc}
    <img
      crossorigin="anonymous"
      src={imageSrc}
      alt={imageAlt}
      class="h-full w-full object-cover"
    />
  {:else}
    <div
      class="flex h-full w-full items-center justify-center rounded-lg bg-neutral-800 text-neutral-500"
    >
      <Icon icon="ph:music-notes" width="5rem" height="5rem" />
    </div>
  {/if}
  {#if playlistOwner}
    <button
      on:click={emitClick}
      class={`absolute top-0 hidden h-full w-full cursor-default group-hover:block ${
        imageSrc ? 'bg-neutral-950/70' : 'bg-neutral-950'
      }`}
    >
      <div class="flex flex-col items-center text-neutral-50">
        <Icon icon="ph:image" width="3rem" height="3rem" />
        <span class="text-sm font-semibold text-neutral-400">Choose photo</span>
      </div>
    </button>
  {/if}
</div>
