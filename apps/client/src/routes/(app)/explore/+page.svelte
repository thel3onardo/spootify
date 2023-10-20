<script lang="ts">
  import GenreItem from '$lib/components/GenreItem.svelte';
  import SkeletonLoader from '$lib/components/SkeletonLoader.svelte';

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
</script>

<div
  class="min-h-full w-full rounded-lg bg-gray-950 px-6 pb-8 pt-20 text-white"
>
  <h1 class="mb-8 font-inter text-2xl font-bold">Browse all</h1>

  <div class="flex max-w-[1900px] flex-wrap gap-4">
    {#each categories as { name, rgbColor, redirectUrl, categoryCover }}
      <GenreItem {name} {rgbColor} {redirectUrl} {categoryCover} />
    {/each}
  </div>
  <SkeletonLoader width="10rem" height="10rem" />
</div>
