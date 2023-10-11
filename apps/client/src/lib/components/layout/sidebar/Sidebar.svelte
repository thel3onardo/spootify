<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
  import SidebarMyLibrary from './SidebarMyLibrary.svelte';

  const menuOptions = [
    { id: 1, label: 'Home', icon: 'material-symbols:home-rounded', href: '/' },
    {
      id: 2,
      label: 'Explore',
      icon: 'ph:magnifying-glass-fill',
      href: '/explore',
    },
  ];
</script>

<!-- TODO:  I should refactor some of these, seems kinda bad -->
<div
  class="flex flex-col gap-y-2 items-center h-full text-white w-[400px] select-none overflow-hidden"
>
  <div
    class="flex flex-col gap-y-2 py-2 text-gray-500 bg-gray-950 rounded-lg w-full"
  >
    {#each menuOptions as { icon, label, href }}
      <a
        {href}
        class="flex items-center gap-x-5 px-5 py-2 rounded-lg hover:text-white {href ===
        $page.url.pathname
          ? 'text-white'
          : 'text-gray-500'}"
        data-sveltekit-preload-data
      >
        <Icon {icon} width="1.8rem" height="1.8rem" />
        <span class="text-md font-bold font-manrope">{label}</span>
      </a>
    {/each}
  </div>

  <SidebarMyLibrary />
</div>
