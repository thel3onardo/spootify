<script lang="ts">
  import CategoryItem from '$lib/components/GenreItem.svelte';

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

<div class="w-full bg-gray-800 text-white rounded-lg py-8 px-6">
  <h1 class="font-manrope font-bold text-xl mb-4">Browse all</h1>

  <div class="columns-[190px] grid auto-rows-auto gap-4 max-w-[1900px]">
    {#each categories as { name, rgbColor, redirectUrl, categoryCover }}
      <CategoryItem {name} {rgbColor} {redirectUrl} {categoryCover} />
    {/each}
  </div>
</div>
