<script lang="ts">
  import { onMount } from 'svelte';

  import Button from '../components/button/Button.svelte';
  import IconButton from '../components/button/IconButton.svelte';
  import DropdownMenu from '$lib/ui/components/DropdownMenu.svelte';

  import { NAVBAR_ICONS_SIZE } from '$lib/constants';
  import UserProfile from './navbar/UserProfile.svelte';
  import { user } from '$lib/stores/user';

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

  const historyForward = () => {
    history.go(1);
  };

  const historyBack = () => {
    history.go(-1);
  };

  export let bgColor = '#121212';
</script>

<nav
  bind:this={navEl}
  class="sticky -top-1 z-50 flex w-full items-center justify-between px-6 py-4 transition duration-300"
  style="--bgColor: {bgColor}"
>
  <div class="flex items-center gap-x-3 text-white">
    <IconButton
      icon="ion:ios-arrow-back"
      iconSize={NAVBAR_ICONS_SIZE.ARROWS}
      class="rounded-full bg-gray-950/70 p-2.5 hover:bg-gray-950"
      tooltipLabel="Go back"
      on:click={historyBack}
    />
    <IconButton
      icon="ion:ios-arrow-forward"
      iconSize={NAVBAR_ICONS_SIZE.ARROWS}
      class="rounded-full bg-gray-950/70 p-2.5 hover:bg-gray-950"
      tooltipLabel="Go forward"
      on:click={historyForward}
    />

    <slot name="content" />
  </div>

  <div class="flex items-center gap-x-3 font-inter">
    {#if $user.loggedIn}
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
      <UserProfile />
    {:else}
      <Button
        href="/accounts/register"
        rounded="md"
        variant="dark"
        class="px-7 py-3"
      >
        <span class="font-semibold text-white">Sign up</span>
      </Button>
      <Button
        href="/accounts/login"
        rounded="3xl"
        variant="light"
        class="px-7 py-3"
      >
        <span class="font-semibold">Log in</span>
      </Button>
    {/if}
  </div>
</nav>
