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
  class="flex rounded-md bg-white/10 overflow-hidden h-[80px] hover:bg-white/20 transition"
  on:mouseenter={togglePlayButtonVisible}
  on:mouseleave={togglePlayButtonVisible}
>
  <div class="h-full w-[100px] shadow-lg">
    <img src={coverUrl} alt={coverAlt} class="object-cover h-full w-full" />
  </div>
  <div class="flex items-center justify-between p-4 py-5 w-full">
    <h3 class="font-inter font-semibold text-lg text-white">{name}</h3>

    {#if playBtnVisible}
      <div in:fade={{ duration: 250 }} out:fade={{ duration: 100 }}>
        <PlayButton size="1.6rem" />
      </div>
    {/if}
  </div>
</div>
