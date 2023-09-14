<script lang="ts">
  import PlayButton from '$lib/components/PlayButton.svelte';
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
      <p class="text-gray-500">{data.description}</p>
    </div>
  </div>
  <div class="flex flex-col bg-black/20 h-full p-8">
    <div>
      <PlayButton on:click={test} />
    </div>
  </div>
</div>

<style>
  .playlist-page {
    background: linear-gradient(var(--main-color), #121212 50%);
  }
</style>
