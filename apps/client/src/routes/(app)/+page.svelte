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

<div
  class="pt-24 px-8 min-h-full bg-gradient-to-b from-[#780000]/20 to-gray-950"
>
  <h1 class="font-inter font-bold text-3xl text-white mb-6">
    {greetingsMessage}
  </h1>
  <div
    class="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4 max-w-[1400px]"
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
    <section class="w-full flex flex-col py-16">
      <div class="flex items-center justify-between w-full mb-4">
        <h1 class="font-bold font-inter text-2xl text-white">
          {section.title}
        </h1>
        <a
          href="/"
          class="text-gray-500 text-sm font-bold font-manrope hover:underline underline-offset-1"
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
