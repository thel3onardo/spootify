<script lang="ts">
  import { fly } from 'svelte/transition';
  import PlayButton from '../PlayButton.svelte';

  let playBtnVisible = false;

  const togglePlayBtn = () => {
    playBtnVisible = !playBtnVisible;
  };

  export let coverUrl: string,
    coverAlt: string,
    name: string,
    description: string;
</script>

<a href="">
  <div
    class="flex max-w-[400px] flex-col rounded-lg bg-gray-950 p-4 transition duration-500 hover:bg-gray-900"
    on:mouseenter={togglePlayBtn}
    on:mouseleave={togglePlayBtn}
  >
    <div class="relative h-[150px] w-[150px] overflow-hidden rounded-md">
      <img src={coverUrl} alt={coverAlt} class="h-full w-full object-cover" />

      {#if playBtnVisible}
        <div transition:fly={{ y: 50 }}>
          <PlayButton class="absolute bottom-2 right-2" size="1.8rem" />
        </div>
      {/if}
    </div>
    <div class="mt-4">
      <h2 class="mb-1 font-inter font-bold text-white">{name}</h2>
      <p class="font-manrope text-sm font-semibold text-gray-500">
        {description}
      </p>
    </div>
  </div>
</a>
