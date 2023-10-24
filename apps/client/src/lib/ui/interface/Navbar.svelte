<script lang="ts">
  import Icon from '@iconify/svelte';
  import Button from '../components/button/Button.svelte';
  import { onMount } from 'svelte';
  import IconButton from '../components/button/IconButton.svelte';

  let navEl: HTMLElement;

  const loggedIn = true;
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
  class="sticky -top-1 z-20 flex w-full items-center justify-between px-6 py-2 transition duration-300"
  style="--bgColor: {bgColor}"
>
  <div class="flex items-center gap-x-3 text-white">
    <!-- TODO: implement functionality to those buttons below -->
    <IconButton
      icon="material-symbols:arrow-back-ios-new-rounded"
      size="1.15rem"
      class="rounded-full bg-black p-2"
      tooltipLabel="Go back"
    />
    <IconButton
      icon="material-symbols:arrow-forward-ios-rounded"
      size="1.15rem"
      class="rounded-full bg-black p-2"
      tooltipLabel="Go forward"
    />

    <slot name="content" />
  </div>
  {#if loggedIn}
    <div class="flex">
      <Button href="/register" rounded="md" variant="dark" class="px-7 py-3">
        <span class="font-semibold text-gray-500">Sign up</span>
      </Button>
      <Button href="/login" rounded="3xl" variant="light" class="px-7 py-3">
        <span class="font-semibold">Log in</span>
      </Button>
    </div>
  {/if}
</nav>
