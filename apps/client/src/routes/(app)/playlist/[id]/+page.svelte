<script lang="ts">
  import { onMount } from 'svelte';
  import { FastAverageColor } from 'fast-average-color';

  import PlayButton from '$lib/ui/components/button/PlayButton.svelte';
  import SaveLibraryButton from '$lib/components/SaveLibraryButton.svelte';
  import DownloadButton from '$lib/ui/components/collection/DownloadButton.svelte';
  import TracksList from '$lib/ui/components/collection/TracksList.svelte';
  import FilterBar from '$lib/components/IconSearchbar.svelte';
  import SortOptionsMenu from '$lib/ui/components/collection/SortOptionsMenu.svelte';
  import Navbar from '$lib/ui/interface/Navbar.svelte';
  import DialogEditDetails from '$lib/ui/components/collection/DialogEditDetails.svelte';
  import CollectionImage from '$lib/ui/components/collection/CollectionImage.svelte';

  let backgroundColor: string;
  let filterValue = '';
  let editDialogVisible = false;

  const getAverageColor = async (imageUrl: string) => {
    const fac = new FastAverageColor();
    const result = await fac.getColorAsync(imageUrl, {
      width: 232,
      height: 232,
    });

    setBgColor(result.hex);
  };

  const setBgColor = (hexColor: string) => {
    backgroundColor = hexColor;
  };

  const toggleEditDialog = () => {
    editDialogVisible = !editDialogVisible;
  };

  onMount(() => {
    if (data.coverImage) return getAverageColor(data.coverImage);

    setBgColor('#525252');
  });

  export let data;
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
        class="image-shadow group relative h-[232px] w-full max-w-[232px] overflow-hidden rounded-xl"
      >
        <CollectionImage
          on:click={toggleEditDialog}
          imageSrc={data.coverImage}
          imageAlt="removethis"
          playlistOwner={data.playlistOwner}
        />
      </div>
      <div class="font-manrope ml-6 basis-3/4">
        <p class="mb-2 text-sm font-semibold text-neutral-200">Playlist</p>
        <button on:click={data.playlistOwner ? toggleEditDialog : ''}>
          <h1
            class="mb-6 text-start font-inter text-6xl font-bold tracking-tighter text-neutral-50 lg:text-6xl xl:text-8xl"
          >
            {data.name}
          </h1>
        </button>
        <p class="text-sm font-medium text-neutral-300">
          {data.description ?? ''}
        </p>
      </div>
    </div>
  </div>
  <div class="relative isolate flex flex-col bg-neutral-950 p-8">
    <div class="gradient absolute left-0 top-0 -z-10 h-[232px] w-full"></div>
    <div class="flex items-center justify-between">
      <div class="flex gap-x-8">
        <PlayButton class="mr-4" />
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
  <DialogEditDetails
    bind:visible={editDialogVisible}
    playlistId={data.playlistId}
    playlistOwner={data.playlistOwner}
    coverImageUrl={data.coverImage}
  />
</div>

<style>
  .playlist-page {
    background-color: var(--main-color);
  }

  .image-shadow {
    box-shadow: 0px 0px 5rem 1rem rgba(10, 10, 10, 0.5);
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
</style>
