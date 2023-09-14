<script lang="ts">
  import PlayButton from '$lib/components/PlayButton.svelte';
  import SaveLibraryButton from '$lib/components/SaveLibraryButton.svelte';
  import DownloadButton from '$lib/components/collection/DownloadButton.svelte';
  import TracksList from '$lib/components/collection/TracksList.svelte';
  import type { IPlaylist } from './types';

  const mainColor = '#4000f0';
  const test = () => {
    console.log('test funciton');
  };

  export let data: IPlaylist;
</script>

<div
  class="flex flex-col w-full playlist-page"
  style="--main-color: {mainColor}"
>
  <div class="flex items-end mt-28 p-8">
    <div class="h-[232px] w-[232px] drop-shadow-2xl mr-6">
      <img
        src={data.coverUrl}
        alt="Playlists cover"
        class="object-cover h-full"
      />
    </div>
    <div class="font-manrope">
      <p class="text-sm font-semibold mb-2">Playlist</p>
      <h1 class="font-inter font-bold text-8xl mb-6 tracking-tighter">
        {data.name}
      </h1>
      <p class="text-gray-500 text-sm font-medium">{data.description}</p>
    </div>
  </div>
  <div class="flex flex-col bg-[#121212] h-full p-8 isolate relative">
    <div class="absolute top-0 -z-10 left-0 what h-[232px] w-full"></div>
    <div class="flex items-center gap-x-8">
      <PlayButton on:click={test} class="mr-4" />
      <SaveLibraryButton size="lg" />
      <DownloadButton />
    </div>
    <TracksList class="my-8" />
  </div>
</div>

<style>
  .playlist-page {
    background-color: var(--main-color);
    /* background: linear-gradient(var(--main-color) 5%, #121212); */
  }

  .what {
    background-color: var(--main-color);
    background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0, #121212 95%);
  }
</style>
