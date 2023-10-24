<script lang="ts">
  import { onMount } from 'svelte';
  import PlaylistItem from '$lib/components/home/PlaylistItem.svelte';
  import MediaCard from '$lib/ui/components/MediaCard.svelte';
  import { HomeSections } from '$lib/data/home';
  import Navbar from '$lib/ui/interface/Navbar.svelte';

  let bgColor = '';
  let defaultBgColor = '#9f1239';
  let currentTime = new Date().getHours();
  let greetingsMessage = '';

  let latestAlbums = [
    {
      id: 1,
      name: 'What',
      coverImage: '/anime-girl.jpg',
      coverAlt: '',
    },
    {
      id: 2,
      name: 'What',
      coverImage: '/anime-girl.jpeg',
      coverAlt: '',
    },
    {
      id: 3,
      name: 'What',
      coverImage: '/anime-girl.jpg',
      coverAlt: '',
    },
    {
      id: 1,
      name: 'What',
      coverImage: '/anime-girl.jpg',
      coverAlt: '',
    },
    {
      id: 2,
      name: 'What',
      coverImage: '/anime-girl.jpeg',
      coverAlt: '',
    },
    {
      id: 3,
      name: 'What',
      coverImage: '/anime-girl.jpg',
      coverAlt: '',
    },
  ];
  let latestAlbumsColors: string[] = [];

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

  const setBgColor = (color: string) => {
    bgColor = color;
  };

  const setColor = (colorHex: any, id: number) => {
    latestAlbumsColors[id] = colorHex;
  };

  onMount(() => {
    getCurrentTime();
    setBgColor(defaultBgColor);
  });
</script>

<svelte:head>
  <title>Spootify - Home</title>
</svelte:head>

<div class="isolate flex min-h-full flex-col bg-gray-950">
  <Navbar />
  <div
    style="--color: {bgColor}"
    class="gradient absolute top-0 -z-10 h-[400px] w-full transition-all duration-700"
  />
  <div class="px-6 pt-2">
    <header>
      <h1 class="font-inter mb-6 text-3xl font-bold text-white">
        {greetingsMessage}
      </h1>
      <div
        class="grid max-w-[1400px] grid-cols-1 grid-rows-2 gap-4 xl:grid-cols-2 2xl:grid-cols-3"
      >
        {#each latestAlbums as album}
          <div
            on:mouseenter={() => setBgColor(latestAlbumsColors[album.id])}
            on:mouseleave={() => setBgColor(defaultBgColor)}
          >
            <PlaylistItem
              name={album.name}
              coverUrl={album.coverImage}
              coverAlt={album.coverAlt}
              on:genColorReady={(e) => setColor(e.detail, album.id)}
            />
          </div>
        {/each}
      </div>
    </header>
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
          <div>
            <MediaCard
              name="Chill mix"
              description="Artist"
              coverAlt="s"
              coverUrl="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/t/medium-anime-scenery-beautiful-nature-dreamworld-anime-aesthetic-original-imagkzhgbdv9xsgh.jpeg?q=90"
              href="/"
            />
          </div>
          <div>
            <MediaCard
              name="Chill mix"
              description="Artist"
              coverAlt="s"
              coverUrl="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/t/medium-anime-scenery-beautiful-nature-dreamworld-anime-aesthetic-original-imagkzhgbdv9xsgh.jpeg?q=90"
              href="/"
            />
          </div>
          <div>
            <MediaCard
              name="Chill mix"
              description="Artist"
              coverAlt="s"
              coverUrl="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/t/medium-anime-scenery-beautiful-nature-dreamworld-anime-aesthetic-original-imagkzhgbdv9xsgh.jpeg?q=90"
              href="/"
            />
          </div>
        </div>
      </section>
    {/each}
  </div>
</div>

<style>
  .gradient {
    background-color: var(--color);
    background-image: linear-gradient(rgb(18, 18, 18, 0.4) 0%, #121212 95%);
  }
</style>
