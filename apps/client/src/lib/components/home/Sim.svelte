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
    class="flex flex-col rounded-lg bg-gray-950 p-4 max-w-[400px] hover:bg-gray-900 transition"
    on:mouseenter={togglePlayBtn}
    on:mouseleave={togglePlayBtn}
  >
    <div class="h-[150px] w-[150px] rounded-md relative overflow-hidden">
      <img src={coverUrl} alt={coverAlt} class="object-cover h-full w-full" />

      {#if playBtnVisible}
        <div transition:fly={{ y: 100 }}>
          <PlayButton class="absolute bottom-2 right-2" size="1.8rem" />
        </div>
      {/if}
    </div>
    <div class="mt-4">
      <h2 class="text-white font-inter font-bold mb-1">{name}</h2>
      <p class="text-gray-500 font-manrope font-semibold text-sm">
        {description}
      </p>
    </div>
  </div>
</a>
