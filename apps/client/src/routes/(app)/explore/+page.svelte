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

<div class="w-full bg-gray-950 text-white rounded-lg pt-20 pb-8 px-6 h-full">
  <h1 class="font-inter font-bold text-2xl mb-8">Browse all</h1>

  <div class="flex flex-wrap gap-4 max-w-[1900px]">
    {#each categories as { name, rgbColor, redirectUrl, categoryCover }}
      <GenreItem {name} {rgbColor} {redirectUrl} {categoryCover} />
    {/each}
  </div>
  <SkeletonLoader width="10rem" height="10rem" />
</div>
