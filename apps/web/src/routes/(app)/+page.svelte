<script lang="ts">
  import { onMount } from 'svelte';
  import PlaylistItem from '$lib/components/home/PlaylistItem.svelte';
  import MediaCard from '$lib/ui/components/MediaCard.svelte';
  import { HomeSections } from '$lib/data/home';
  import Navbar from '$lib/ui/interface/Navbar.svelte';
  import { user } from '$lib/stores/user';
  import Button from '$lib/ui/components/button/Button.svelte';
  import Link from '$lib/ui/components/Link.svelte';
  import { playTrack } from '$lib/stores/track';

  let bgColor = '';
  let defaultBgColor = '#9f1239';
  let currentTime = new Date().getHours();
  let greetingMessage = '';

  let latestAlbums = [
    {
      id: 1,
      name: 'Hollow Coves',
      coverImage:
        'https://m.media-amazon.com/images/I/81gelNrme5L._UF1000,1000_QL80_.jpg',
      coverAlt: '',
    },
    {
      id: 2,
      name: 'Novo Amor',
      coverImage:
        'https://i.scdn.co/image/ab6761610000e5eb6f9004573a721336b343bbd3',
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
    //TODO: implement this correctly, using nationalization
    if (currentTime > 0 && currentTime <= 12) {
      greetingMessage = 'Bom dia';
    }
    if (currentTime >= 12 && currentTime <= 18) {
      greetingMessage = `Boa tarde`;
    }

    if (currentTime >= 18 && currentTime <= 24) {
      greetingMessage = 'Boa noite';
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

<div class="isolate flex min-h-full flex-col bg-neutral-950">
  <Navbar />
  <div
    style="--color: {bgColor}"
    class="gradient absolute top-0 -z-10 h-[400px] w-full transition-all duration-700"
  />
  <div class="px-6 pt-2">
    <header>
      <h1 class="mb-6 font-inter text-3xl font-bold text-white">
        {greetingMessage}
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
          <Link href="/" class="font-manrope text-sm font-bold text-gray-400"
            >Show all</Link
          >
        </div>
        <div class="flex gap-x-4">
          <div>
            <MediaCard
              name="lofi beats"
              description="lofi beats"
              coverAlt="s"
              coverUrl="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/t/medium-anime-scenery-beautiful-nature-dreamworld-anime-aesthetic-original-imagkzhgbdv9xsgh.jpeg?q=90"
              href="/"
            />
          </div>
          <div>
            <MediaCard
              name="These memories"
              description="Hollow coves"
              coverAlt="s"
              coverUrl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cc63c39-c53b-4b37-bf1f-a3a3810ad232/dg5716q-ab3e4c46-af05-4607-97be-c5bf33586f08.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjYzYzYzM5LWM1M2ItNGIzNy1iZjFmLWEzYTM4MTBhZDIzMlwvZGc1NzE2cS1hYjNlNGM0Ni1hZjA1LTQ2MDctOTdiZS1jNWJmMzM1ODZmMDguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6U8z530QiTsaBN6sjQcNYcB6TNNg4B2xD2kO7Y88Jr8"
              href="/"
            />
          </div>
          <div>
            <MediaCard
              name="Chill mix"
              description=" Artist"
              coverAlt="s"
              coverUrl="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/t/medium-anime-scenery-beautiful-nature-dreamworld-anime-aesthetic-original-imagkzhgbdv9xsgh.jpeg?q=90"
              href="/"
            />
          </div>
        </div>
      </section>
    {/each}

    <button on:click={() => playTrack(19)}>
      <Button variant="primary" rounded="xl">Play music</Button>
    </button>

    <button on:click={() => playTrack(25)}>
      <Button variant="primary" rounded="xl">Play music 2</Button>
    </button>

    <a href="/accounts/sign-in">login</a>
  </div>
</div>

<style>
  .gradient {
    background-color: var(--color);
    background-image: linear-gradient(rgb(18, 18, 18, 0.4) 0%, #0a0a0a 95%);
  }
</style>
