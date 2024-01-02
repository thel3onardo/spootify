<script lang="ts">
  import type { IPlaylist } from './interfaces';
  import { onMount } from 'svelte';
  import { FastAverageColor } from 'fast-average-color';

  import PlayButton from '$lib/ui/components/button/PlayButton.svelte';
  import SaveLibraryButton from '$lib/components/SaveLibraryButton.svelte';
  import DownloadButton from '$lib/components/collection/DownloadButton.svelte';
  import TracksList from '$lib/components/collection/TracksList.svelte';
  import FilterBar from '$lib/components/IconSearchbar.svelte';
  import SortOptionsMenu from '$lib/components/collection/SortOptionsMenu.svelte';
  import Navbar from '$lib/ui/interface/Navbar.svelte';

  let backgroundColor: string;
  let coverImage: HTMLImageElement;
  let filterValue = '';

  const test = () => {
    console.log('play button triggered');
  };
  const getAverageColor = async () => {
    const fac = new FastAverageColor();
    const result = await fac.getColorAsync(coverImage, {
      width: 232,
      height: 232,
    });
    backgroundColor = result?.hex;
  };

  onMount(() => {
    getAverageColor();
  });

  export let data: IPlaylist;
</script>

<div
  class="playlist-page flex min-h-full w-full flex-col"
  style="--main-color: {backgroundColor}"
>
  <Navbar />
  <div class="mt-14 flex items-end p-8">
    <div class="h-[232px] max-w-[232px] grow drop-shadow-2xl">
      <img
        crossorigin="anonymous"
        src="/anime-girl.jpeg"
        alt="Playlists cover"
        class="h-full w-full object-cover"
        bind:this={coverImage}
      />
    </div>
    <div class="ml-6 basis-3/4 font-manrope">
      <p class="mb-2 text-sm font-semibold">Playlist</p>
      <h1
        class="mb-6 font-inter text-6xl font-bold tracking-tighter xl:text-8xl"
      >
        {data.name}
      </h1>
      <p class="text-sm font-medium text-gray-500">{data.description}</p>
    </div>
  </div>
  <div class="relative isolate flex h-full flex-col bg-[#121212] p-8">
    <div class="gradient absolute left-0 top-0 -z-10 h-[232px] w-full"></div>
    <div class="flex items-center justify-between">
      <div class="flex gap-x-8">
        <PlayButton on:click={test} class="mr-4" />
        <SaveLibraryButton size="lg" />
        <DownloadButton />
      </div>
      <div class="relative flex gap-x-6">
        <FilterBar placeholder="Search in playlist" bind:value={filterValue} />
        <SortOptionsMenu />
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
