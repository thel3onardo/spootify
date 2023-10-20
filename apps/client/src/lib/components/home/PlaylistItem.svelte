<script lang="ts">
  import PlayButton from '../PlayButton.svelte';
  import { fade } from 'svelte/transition';

  export let name: string;
  export let coverUrl: string;
  export let coverAlt: string;

  let playBtnVisible = false;

  const togglePlayButtonVisible = () => {
    playBtnVisible = !playBtnVisible;
  };
</script>

<div
  class="flex h-[80px] overflow-hidden rounded-md bg-white/10 transition hover:bg-white/20"
  on:mouseenter={togglePlayButtonVisible}
  on:mouseleave={togglePlayButtonVisible}
>
  <div class="h-full w-[100px] shadow-lg">
    <img src={coverUrl} alt={coverAlt} class="h-full w-full object-cover" />
  </div>
  <div class="flex w-full items-center justify-between p-4 py-5">
    <h3 class="font-inter text-lg font-semibold text-white">{name}</h3>

    {#if playBtnVisible}
      <div in:fade={{ duration: 250 }} out:fade={{ duration: 100 }}>
        <PlayButton size="1.6rem" />
      </div>
    {/if}
  </div>
</div>
