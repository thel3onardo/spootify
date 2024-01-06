<script lang="ts">
  import type { IPlaylist } from './+page';
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

    backgroundColor = result.hex;
  };

  onMount(() => {
    getAverageColor();
  });

  export let data: IPlaylist;
</script>

<div
  class="flex min-h-full w-full flex-col"
  style="--main-color: {backgroundColor}"
>
  <div class="playlist-page relative">
    <Navbar />
    <div class="header-gradient absolute top-0 z-10 h-full w-full" />
    <div class="relative z-20 mt-14 flex items-end p-8">
      <div
        class="image-shadow h-[232px] max-w-[232px] grow overflow-hidden rounded-lg"
      >
        <img
          crossorigin="anonymous"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cc63c39-c53b-4b37-bf1f-a3a3810ad232/dg5716q-ab3e4c46-af05-4607-97be-c5bf33586f08.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjYzYzYzM5LWM1M2ItNGIzNy1iZjFmLWEzYTM4MTBhZDIzMlwvZGc1NzE2cS1hYjNlNGM0Ni1hZjA1LTQ2MDctOTdiZS1jNWJmMzM1ODZmMDguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6U8z530QiTsaBN6sjQcNYcB6TNNg4B2xD2kO7Y88Jr8"
          alt="Playlists cover"
          class="h-full w-full object-cover"
          bind:this={coverImage}
        />
      </div>
      <div class="ml-6 basis-3/4 font-manrope">
        <p class="mb-2 text-sm font-semibold text-neutral-200">Playlist</p>
        <h1
          class="mb-6 font-inter text-6xl font-bold tracking-tighter text-neutral-50 lg:text-6xl xl:text-8xl"
        >
          {data.name}
        </h1>
        <p class="text-sm font-medium text-neutral-300">{data.description}</p>
      </div>
    </div>
  </div>
  <div class="relative isolate flex flex-col bg-neutral-950 p-8">
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
    background-image: linear-gradient(
      rgba(10, 10, 10, 0.5) 0,
      rgba(10, 10, 10, 1) 70%
    );
  }

  .header-gradient {
    background-image: linear-gradient(transparent 0, rgba(10, 10, 10, 0.4) 80%);
  }

  .image-shadow {
    box-shadow: 0px 0px 5rem 1rem rgba(10, 10, 10, 0.5);
  }
</style>
