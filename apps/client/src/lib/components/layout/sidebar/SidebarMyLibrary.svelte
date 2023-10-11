<script lang="ts">
  import IconButton from '$lib/components/IconButton.svelte';
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

<div class="flex flex-col w-full bg-gray-800 rounded-lg overflow-hidden">
  <div id="my-lib-header" class="flex justify-between text-gray-500">
    <IconButton
      icon="solar:music-library-2-bold"
      tooltipLabel="Collapse your library"
      size="1.5rem"
      class="hover:text-white transition"
    >
      <span class="font-semibold font-inter text-md ml-2">Your library</span>
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
  <div data-simplebar class="flex flex-col mt-2 overflow-y-scroll">
    {#if libraryItems !== null}
      <div class="flex flex-col">
        {#each libraryItems as item}
          <LibraryItem {...item} />
        {/each}
      </div>
    {/if}
  </div>
</div>
