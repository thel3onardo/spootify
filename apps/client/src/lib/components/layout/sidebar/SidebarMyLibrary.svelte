<script lang="ts">
  import IconButton from '$lib/ui/components/button/IconButton.svelte';
  import LibraryItem from './LibraryItem.svelte';

  let filterValue = '';

  const libraryItems = [
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
  class="flex w-full flex-col overflow-hidden rounded-lg bg-gray-950 backdrop-blur-md"
>
  <div id="my-lib-header" class="flex justify-between px-5 pt-3 text-gray-500">
    <IconButton
      icon="solar:music-library-2-bold"
      tooltipLabel="Collapse your library"
      size="1.5rem"
      class="transition hover:text-white"
    >
      <span class="text-md font-inter ml-2 font-semibold">Your library</span>
    </IconButton>
    <div class="flex gap-x-1">
      <IconButton
        icon="ic:baseline-plus"
        tooltipLabel="Create playlist or folder"
        size="1.5rem"
        hoverBg
      />
      <IconButton
        icon="material-symbols:arrow-forward"
        tooltipLabel="Expand"
        size="1.5rem"
        hoverBg
      />
    </div>
  </div>
  <div data-simplebar class="mb-2 mt-2 flex flex-col overflow-y-scroll px-4">
    {#if libraryItems !== null}
      <div class="flex flex-col">
        {#each libraryItems as item}
          <LibraryItem {...item} />
        {/each}
      </div>
    {/if}
  </div>
</div>
