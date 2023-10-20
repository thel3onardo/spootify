<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
  import SidebarMyLibrary from './SidebarMyLibrary.svelte';

  const menuOptions = [
    { id: 1, label: 'Home', icon: 'material-symbols:home-rounded', href: '/' },
    {
      id: 2,
      label: 'Search',
      icon: 'ph:magnifying-glass-fill',
      href: '/search',
    },
  ];
</script>

<!-- TODO:  I should refactor some of these, seems kinda bad -->
<div
  class="flex h-full w-[400px] select-none flex-col items-center gap-y-2 overflow-hidden text-white"
>
  <div
    class="flex w-full flex-col gap-y-2 rounded-lg bg-gray-950 py-2 text-gray-500"
  >
    {#each menuOptions as { icon, label, href }}
      <a
        {href}
        class="flex items-center gap-x-5 rounded-lg px-5 py-2 hover:text-white {href ===
        $page.url.pathname
          ? 'text-white'
          : 'text-gray-500'}"
        data-sveltekit-preload-data
      >
        <Icon {icon} width="1.8rem" height="1.8rem" />
        <span class="text-md font-manrope font-bold">{label}</span>
      </a>
    {/each}
  </div>

  <SidebarMyLibrary />
</div>
