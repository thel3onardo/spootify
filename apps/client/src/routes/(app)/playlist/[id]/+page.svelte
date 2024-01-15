<script lang="ts">
  import { onMount } from 'svelte';
  import { FastAverageColor } from 'fast-average-color';

  import PlayButton from '$lib/ui/components/button/PlayButton.svelte';
  import SaveLibraryButton from '$lib/components/SaveLibraryButton.svelte';
  import DownloadButton from '$lib/ui/collection/DownloadButton.svelte';
  import TracksList from '$lib/ui/collection/TracksList.svelte';
  import FilterBar from '$lib/components/IconSearchbar.svelte';
  import SortOptionsMenu from '$lib/ui/collection/SortOptionsMenu.svelte';
  import Navbar from '$lib/ui/interface/Navbar.svelte';
  import DialogEditDetails from '$lib/ui/collection/DialogEditDetails.svelte';
  import CollectionImage from '$lib/ui/collection/CollectionImage.svelte';
  import Avatar from '$lib/components/Avatar.svelte';
  import ViewMode from '$lib/ui/collection/ViewMode.svelte';

  import type { ViewModeType } from '$lib/ui/collection/ViewMode.svelte';

  let backgroundColor: string;
  let filterValue = '';
  let editDialogVisible = true;
  let viewMode: ViewModeType = 'list';

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

  const setNewCollectionData = (e: CustomEvent) => {
    data.coverImage = e.detail.coverImage;
    data.name = e.detail.name;
    data.description = e.detail.description;

    getAverageColor(data.coverImage);
  };

  const switchViewMode = (newViewMode: ViewModeType) => {
    viewMode = newViewMode;
  };

  onMount(() => {
    if (data.coverImage) return getAverageColor(data.coverImage);

    setBgColor('#525252');
  });

  export let data;
</script>

<div
  class="flex h-full w-full flex-col"
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

        <button on:click={() => (data.playlistOwner ? toggleEditDialog() : '')}>
          <h1
            class="3xl:text-8xl mb-6 text-start font-inter font-bold leading-6 tracking-tighter text-neutral-50 md:text-3xl lg:text-5xl 2xl:text-7xl"
          >
            {data.name}
          </h1>
        </button>

        <p class="text-sm font-medium text-neutral-300">
          {data.description ?? ''}
        </p>

        <div class="mt-4 flex items-center text-sm text-neutral-200">
          <div class="flex items-center gap-x-1">
            {#if data.author.profileImage}
              <Avatar src={data.author.profileImage} class="h-6 w-6" />
            {/if}
            <a
              href="/profile/{data.author.id}"
              class="tracking-wide hover:underline"
            >
              <span class="font-extrabold">{data.author.name}</span>
            </a>
          </div>

          {#if data.tracks?.length > 0}
            <div class="font-medium before:mx-1.5 before:content-['•']">
              <span
                >{data.tracks?.length} song{data.tracks.length > 1
                  ? 's'
                  : ''}</span
              >
              <span>, 232 minutes</span>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
  <div class="relative isolate flex h-full flex-col bg-neutral-950 p-8">
    <div class="gradient absolute left-0 top-0 -z-10 h-[232px] w-full"></div>
    <div class="flex items-center justify-between">
      <div class="flex gap-x-8">
        <PlayButton class="mr-4" />
        <SaveLibraryButton size="lg" />
        <DownloadButton />
      </div>
      <div class="relative flex items-center gap-x-6">
        <FilterBar placeholder="Search in playlist" bind:value={filterValue} />
        <SortOptionsMenu />
        <ViewMode
          mode={viewMode}
          on:switchViewMode={(e) => switchViewMode(e.detail)}
        />
      </div>
    </div>
    <TracksList class="my-8" tracks={data.tracks} {viewMode} />
  </div>

  <DialogEditDetails
    bind:visible={editDialogVisible}
    playlistId={data.playlistId}
    playlistOwner={data.playlistOwner}
    imageUrl={data.coverImage}
    name={data.name}
    description={data.description}
    on:closeDialog={toggleEditDialog}
    on:newCollectionData={setNewCollectionData}
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
