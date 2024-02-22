<script lang="ts">
  import { FastAverageColor } from 'fast-average-color';
  import { scale } from 'svelte/transition';
  import { createEventDispatcher, onMount } from 'svelte';
  import PlayButton from '../../ui/components/button/PlayButton.svelte';

  export let name: string;
  export let coverUrl: string;
  export let coverAlt: string;
  export let href: string = '/';

  //TODO: implement this logic using pure CSS
  let playBtnVisible = false;
  let coverImage: HTMLImageElement;

  const dispatcher = createEventDispatcher();
  const togglePlayButtonVisible = () => {
    playBtnVisible = !playBtnVisible;
  };
  const genCoverAverageColor = async () => {
    const fac = new FastAverageColor();
    const color = await fac.getColorAsync(coverImage, {
      width: 200,
      height: 200,
    });
    dispatcher('genColorReady', color.hex);
  };

  onMount(() => {
    genCoverAverageColor();
  });
</script>

<a
  {href}
  class="flex h-[80px] overflow-hidden rounded-md bg-white/10 transition hover:bg-white/20"
  on:mouseenter={togglePlayButtonVisible}
  on:mouseleave={togglePlayButtonVisible}
>
  <div class="h-full w-[100px] shadow-lg">
    <img
      bind:this={coverImage}
      src={coverUrl}
      alt={coverAlt}
      class="h-full w-full object-cover"
    />
  </div>
  <div class="flex w-full items-center justify-between p-4 py-5">
    <h3 class="font-inter text-base font-bold text-white">{name}</h3>

    {#if playBtnVisible}
      <div transition:scale={{ duration: 200, opacity: 0 }}>
        <PlayButton size="1.6rem" preventDefault />
      </div>
    {/if}
  </div>
</a>
