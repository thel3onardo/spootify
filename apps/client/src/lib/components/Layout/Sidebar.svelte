<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';

  const menuOptions: Array<{
    id: number;
    label: string;
    icon: string;
    href: string;
  }> = [
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
<div class="flex flex-col gap-y-2 items-center px-2 text-white w-[400px]">
  <div
    class="flex flex-col gap-y-2 py-2 bg-gray-800 rounded-lg w-full mt-1 text-gray-500"
  >
    {#each menuOptions as { icon, label, href }}
      <a
        {href}
        class="flex items-center gap-x-5 px-5 py-2 rounded-lg hover:text-white {href ===
        $page.url.pathname
          ? 'text-white'
          : 'text-gray-500'}"
      >
        <Icon {icon} width="1.8rem" height="1.8rem" />
        <span class="text-md font-bold font-manrope tracking-wide">{label}</span
        >
      </a>
    {/each}
  </div>
</div>
