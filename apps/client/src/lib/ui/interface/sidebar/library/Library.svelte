<script lang="ts">
  import IconButton from '$lib/ui/components/button/IconButton.svelte';
  import LibraryItem from './LibraryItem.svelte';
  import CreateFolderOrPlaylist from './CreateFolderOrPlaylist.svelte';

  let filterValue = '';

  const libraryItems = [
    {
      id: 0,
      name: 'Hollow Coves',
      coverUrl:
        'https://m.media-amazon.com/images/I/81idxQqxTlL._UF1000,1000_QL80_.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 1,
      name: 'Hollow Coves',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 2,
      name: 'What is this',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },
    {
      id: 3,
      name: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },
    {
      id: 0,
      name: 'Hollow Coves',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 1,
      name: 'Hollow Coves',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 2,
      name: 'What is this',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },
    {
      id: 3,
      name: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },
    {
      id: 0,
      name: 'Hollow Coves',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 1,
      name: 'Hollow Coves',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 2,
      name: 'What is this',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },
    {
      id: 3,
      name: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },
    {
      id: 0,
      name: 'Hollow Coves',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 1,
      name: 'Hollow Coves',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 2,
      name: 'What is this',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },
    {
      id: 3,
      name: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },

    {
      id: 0,
      name: 'Hollow Coves',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 1,
      name: 'Hollow Coves',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 2,
      name: 'What is this',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },
    {
      id: 3,
      name: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },
    {
      id: 0,
      name: 'Hollow Coves',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 1,
      name: 'Hollow Coves',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: true,
      description: 'Playlist - 300 songs',
    },
    {
      id: 2,
      name: 'What is this',
      coverUrl:
        'https://w0.peakpx.com/wallpaper/181/464/HD-wallpaper-anime-girl-profile-view-choker-short-hair-coat-anime-thumbnail.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },
    {
      id: 3,
      name: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: '',
      pinned: false,
      description: 'Author',
    },
  ];
</script>

<div
  class="flex w-full flex-col overflow-hidden rounded-lg bg-neutral-950 backdrop-blur-md"
>
  <div
    id="my-lib-header"
    class="flex justify-between px-5 pt-3 text-neutral-400"
  >
    <IconButton
      icon="solar:playlist-linear"
      tooltipLabel="Collapse your library"
      iconSize="1.75rem"
      class="transition hover:text-white"
    >
      <span class="text-md ml-3 font-inter text-base font-semibold"
        >Your library</span
      >
    </IconButton>
    <div class="flex gap-x-2">
      <CreateFolderOrPlaylist />

      <IconButton
        icon="ph:arrow-right-bold"
        tooltipLabel="Expand"
        size="1.75rem"
        hoverBg
      />
    </div>
  </div>

  <div data-simplebar class="my-2 flex flex-col overflow-y-scroll px-4">
    {#if libraryItems !== null}
      <div class="flex flex-col">
        {#each libraryItems as item}
          <LibraryItem {...item} />
        {/each}
      </div>
    {/if}
  </div>
</div>
