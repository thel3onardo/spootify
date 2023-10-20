<script lang="ts">
  import GenreItem from '$lib/components/GenreItem.svelte';
  import SkeletonLoader from '$lib/components/SkeletonLoader.svelte';
  import Sim from '$lib/components/home/Sim.svelte';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Icon from '@iconify/svelte';

  const categories = [
    {
      name: 'Podcasts',
      rgbColor: '48, 102, 80',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '234, 230, 202',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '244, 169, 0',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '48, 102, 80',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '234, 230, 202',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '244, 169, 0',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '48, 102, 80',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '234, 230, 202',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '244, 169, 0',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '48, 102, 80',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '234, 230, 202',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '244, 169, 0',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '48, 102, 80',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '234, 230, 202',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '244, 169, 0',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '48, 102, 80',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '234, 230, 202',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '244, 169, 0',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '48, 102, 80',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '234, 230, 202',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '244, 169, 0',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '48, 102, 80',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '234, 230, 202',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
    {
      name: 'Podcasts',
      rgbColor: '244, 169, 0',
      redirectUrl: '/genres/podcasts',
      categoryCover: '',
    },
  ];
  const recentSearches = [
    {
      name: 'Sad musics',
      description: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: 'yeah',
    },
    {
      name: 'Sad musics',
      description: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: 'yeah',
    },
    {
      name: 'Sad musics',
      description: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: 'yeah',
    },
    {
      name: 'Sad musics',
      description: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: 'yeah',
    },
    {
      name: 'Sad musics',
      description: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: 'yeah',
    },
    {
      name: 'Sad musics',
      description: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: 'yeah',
    },
    {
      name: 'Sad musics',
      description: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: 'yeah',
    },
    {
      name: 'Sad musics',
      description: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: 'yeah',
    },
    {
      name: 'Sad musics',
      description: 'What is this',
      coverUrl:
        'https://i.etsystatic.com/39894181/r/il/402563/4851877899/il_fullxfull.4851877899_87cc.jpg',
      coverAlt: 'yeah',
    },
  ];

  let searchValue: string;
</script>

<svelte:head>
  <title>Spootify - Search</title>
</svelte:head>

<div class="flex min-h-full w-full flex-col rounded-lg bg-gray-950 text-white">
  <Navbar bgColor="#121212">
    <form
      slot="content"
      class="hover:bg-gray-850 group ml-4 flex items-center rounded-3xl border border-transparent bg-gray-900 px-3 text-white hover:border-gray-800"
    >
      <Icon
        icon="ph:magnifying-glass"
        width="1.3rem"
        height="1.3rem"
        class="mr-2"
      />
      <input
        bind:value={searchValue}
        type="text"
        placeholder="What do you want to listen to?"
        class="font-manrope h-full w-full bg-transparent py-3 text-sm font-medium outline-none placeholder:text-white/40"
      />
    </form>
  </Navbar>
  <div class="flex max-w-[1900px] flex-col px-6 py-6">
    <section class="overflow-hidden">
      <h1 class="font-inter text-2xl font-bold">Recent searches</h1>
      <div class="my-4 flex gap-x-6 overflow-hidden">
        {#each recentSearches as item}
          <Sim
            name={item.name}
            description={item.description}
            coverUrl={item.coverUrl}
            coverAlt={item.coverAlt}
          />
        {/each}
      </div>
    </section>
    <section class="mt-6">
      <h1 class="font-inter mb-4 text-2xl font-bold">Browse all</h1>
      <div class="grid gap-6 xl:grid-cols-4 2xl:grid-cols-9">
        {#each categories as { name, rgbColor, redirectUrl, categoryCover }}
          <GenreItem {name} {rgbColor} {redirectUrl} {categoryCover} />
        {/each}
      </div>
      <!-- <SkeletonLoader width="10rem" height="10rem" /> -->
    </section>
  </div>
</div>
