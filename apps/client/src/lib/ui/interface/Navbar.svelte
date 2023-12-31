<script lang="ts">
  import { onMount } from 'svelte';

  import Button from '../components/button/Button.svelte';
  import IconButton from '../components/button/IconButton.svelte';
  import DropdownMenu from '$lib/ui/components/DropdownMenu.svelte';

  import { NAVBAR_ICONS_SIZE } from '$lib/constants';

  let navEl: HTMLElement;
  let loggedIn = false;
  let profileMenuOptions = [
    { id: 1, label: 'Account' },
    { id: 2, label: 'Profile' },
    { id: 3, label: 'Settings' },
    { id: 4, label: 'Logout' },
  ];

  const observer = new IntersectionObserver(
    ([e]) =>
      e.target.classList.toggle(`bg-[${bgColor}]`, e.intersectionRatio < 1),
    { threshold: [1] },
  );

  onMount(() => {
    observer.observe(navEl);
  });

  export let bgColor = '#121212';
</script>

<nav
  bind:this={navEl}
  class="sticky -top-1 z-50 flex w-full items-center justify-between px-6 py-4 transition duration-300"
  style="--bgColor: {bgColor}"
>
  <div class="flex items-center gap-x-3 text-white">
    <!-- TODO: implement functionality to those buttons below -->
    <IconButton
      icon="ion:ios-arrow-back"
      iconSize={NAVBAR_ICONS_SIZE.ARROWS}
      class="rounded-full bg-gray-950/70 p-2.5 hover:bg-gray-950"
      tooltipLabel="Go back"
    />
    <IconButton
      icon="ion:ios-arrow-forward"
      iconSize={NAVBAR_ICONS_SIZE.ARROWS}
      class="rounded-full bg-gray-950/70 p-2.5 hover:bg-gray-950"
      tooltipLabel="Go forward"
    />

    <slot name="content" />
  </div>

  <div class="flex items-center gap-x-3 font-inter">
    {#if loggedIn}
      <Button href="/register" rounded="md" variant="dark" class="px-7 py-3">
        <span class="font-semibold text-white">Sign up</span>
      </Button>
      <Button href="/login" rounded="3xl" variant="light" class="px-7 py-3">
        <span class="font-semibold">Log in</span>
      </Button>
    {:else}
      <IconButton
        icon="ph:bell"
        iconSize={NAVBAR_ICONS_SIZE.OTHER}
        tooltipLabel="Notifications"
        class="rounded-full bg-gray-950/70 p-1.5 text-white/80 hover:text-white"
      />
      <IconButton
        icon="ion:people-outline"
        iconSize={NAVBAR_ICONS_SIZE.OTHER}
        tooltipLabel="Friend activity"
        class="rounded-full bg-gray-950/70 p-1.5 text-white/80 hover:text-white"
      />
      <DropdownMenu class="min-w-[150px] rounded bg-gray-800 p-1 text-white">
        <IconButton
          icon="material-symbols:person-2-outline"
          iconSize={NAVBAR_ICONS_SIZE.OTHER}
          tooltipLabel="Leonardo"
          class="rounded-full bg-gray-950/70 p-1.5 text-white/80 hover:text-white"
          slot="trigger"
        />

        <ul slot="options" class="font-manrope text-sm font-medium">
          {#each profileMenuOptions as option, index}
            <li
              class="p-3 font-semibold hover:bg-gray-500/10 {index ===
              profileMenuOptions.length - 1
                ? 'border-t border-gray-500/30'
                : ''}"
            >
              {option.label}
            </li>
          {/each}
        </ul>
      </DropdownMenu>
    {/if}
  </div>
</nav>
