<script lang="ts">
  import type { IPlaylist } from './types';
  import { onMount } from 'svelte';
  import { FastAverageColor } from 'fast-average-color';

  import PlayButton from '$lib/components/PlayButton.svelte';
  import SaveLibraryButton from '$lib/components/SaveLibraryButton.svelte';
  import DownloadButton from '$lib/components/collection/DownloadButton.svelte';
  import TracksList from '$lib/components/collection/TracksList.svelte';
  import SearchBar from '$lib/components/collection/SearchBar.svelte';

  let backgroundColor: string;
  let coverImage: HTMLImageElement;
  const test = () => {
    console.log('test funciton');
  };
  const getAverageColor = async () => {
    const fac = new FastAverageColor();
    const result = await fac.getColorAsync(coverImage, {
      width: 232,
      height: 232,
    });
    backgroundColor = result?.rgba;
  };

  onMount(() => {
    getAverageColor();
  });

  export let data: IPlaylist;
</script>

<div
  class="flex flex-col w-full playlist-page"
  style="--main-color: {backgroundColor}"
>
  <div class="flex items-end mt-28 p-8">
    <div class="drop-shadow-2xl h-[232px] max-w-[232px] grow">
      <img
        crossorigin="anonymous"
        src="/anime-girl.jpg"
        alt="Playlists cover"
        class="object-cover h-full w-full"
        bind:this={coverImage}
      />
    </div>
    <div class="font-manrope ml-6 basis-3/4">
      <p class="text-sm font-semibold mb-2">Playlist</p>
      <h1 class="font-inter font-bold text-8xl mb-6 tracking-tighter">
        {data.name}
      </h1>
      <p class="text-gray-500 text-sm font-medium">{data.description}</p>
    </div>
  </div>
  <div class="flex flex-col bg-[#121212] h-full p-8 isolate relative">
    <div class="absolute top-0 -z-10 left-0 gradient h-[232px] w-full"></div>
    <div class="flex items-center justify-between">
      <div class="flex gap-x-8">
        <PlayButton on:click={test} class="mr-4" />
        <SaveLibraryButton size="lg" />
        <DownloadButton />
      </div>
      <div class="flex relative">
        <SearchBar />
      </div>
    </div>
    <TracksList class="my-8" />
  </div>
</div>

<style>
  .playlist-page {
    background-color: var(--main-color);
  }

  .gradient {
    background-color: var(--main-color);
    background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0, #121212 95%);
  }
</style>
