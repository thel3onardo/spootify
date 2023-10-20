<script lang="ts">
  import { onMount } from 'svelte';
  import PlaylistItem from '$lib/components/home/PlaylistItem.svelte';
  import Sim from '$lib/components/home/Sim.svelte';
  import { HomeSections } from '$lib/data/home';

  let currentColor = '';
  let currentTime = new Date().getHours();
  let greetingsMessage = '';

  let latestAlbums = [
    {
      id: 1,
      name: 'What',
      coverImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYblOXqWFZFm4tHwTgwXm3zJ_pHeugSfHEg&usqp=CAU',
      coverAlt: '',
    },
    {
      id: 2,
      name: 'What',
      coverImage:
        'https://cdn.oneesports.vn/cdn-data/sites/4/2023/03/Anime_BlueLock_YorichiIsagi_2-1024x576-1.jpg',
      coverAlt: '',
    },
    {
      id: 3,
      name: 'What',
      coverImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYblOXqWFZFm4tHwTgwXm3zJ_pHeugSfHEg&usqp=CAU',
      coverAlt: '',
    },
    {
      id: 1,
      name: 'What',
      coverImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYblOXqWFZFm4tHwTgwXm3zJ_pHeugSfHEg&usqp=CAU',
      coverAlt: '',
    },
    {
      id: 2,
      name: 'What',
      coverImage:
        'https://cdn.oneesports.vn/cdn-data/sites/4/2023/03/Anime_BlueLock_YorichiIsagi_2-1024x576-1.jpg',
      coverAlt: '',
    },
    {
      id: 3,
      name: 'What',
      coverImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYblOXqWFZFm4tHwTgwXm3zJ_pHeugSfHEg&usqp=CAU',
      coverAlt: '',
    },
  ];

  const getCurrentTime = () => {
    if (currentTime > 0 && currentTime <= 12) {
      greetingsMessage = 'Bom dia';
    }
    if (currentTime >= 12 && currentTime <= 18) {
      greetingsMessage = 'Boa tarde';
    }

    if (currentTime >= 18 && currentTime <= 24) {
      greetingsMessage = 'Boa noite';
    }
  };

  onMount(() => {
    getCurrentTime();
  });
</script>

<svelte:head>
  <title>Spootify - Home</title>
</svelte:head>

<div
  class="min-h-full bg-gradient-to-b from-[#780000]/20 to-gray-950 px-8 pt-24"
>
  <h1 class="font-inter mb-6 text-3xl font-bold text-white">
    {greetingsMessage}
  </h1>
  <div
    class="grid max-w-[1400px] grid-cols-1 grid-rows-2 gap-4 xl:grid-cols-2 2xl:grid-cols-3"
  >
    {#each latestAlbums as album}
      <PlaylistItem
        name={album.name}
        coverUrl={album.coverImage}
        coverAlt={album.coverAlt}
      />
    {/each}
  </div>
  {#each HomeSections as section}
    <section class="flex w-full flex-col py-16">
      <div class="mb-4 flex w-full items-center justify-between">
        <h1 class="font-inter text-2xl font-bold text-white">
          {section.title}
        </h1>
        <a
          href="/"
          class="font-manrope text-sm font-bold text-gray-500 underline-offset-1 hover:underline"
          >Show all</a
        >
      </div>
      <div class="flex gap-x-4">
        <Sim
          name="Chill mix"
          description="Artist"
          coverAlt="s"
          coverUrl="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/t/medium-anime-scenery-beautiful-nature-dreamworld-anime-aesthetic-original-imagkzhgbdv9xsgh.jpeg?q=90"
        />
        <Sim
          name="Chill mix"
          description="Artist"
          coverAlt="s"
          coverUrl="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/t/medium-anime-scenery-beautiful-nature-dreamworld-anime-aesthetic-original-imagkzhgbdv9xsgh.jpeg?q=90"
        />
        <Sim
          name="Chill mix"
          description="Artist"
          coverAlt="s"
          coverUrl="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/t/medium-anime-scenery-beautiful-nature-dreamworld-anime-aesthetic-original-imagkzhgbdv9xsgh.jpeg?q=90"
        />
      </div>
    </section>
  {/each}
</div>
