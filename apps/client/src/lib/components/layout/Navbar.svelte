<script lang="ts">
  import Icon from '@iconify/svelte';
  import Button from '../Button.svelte';
  import { onMount } from 'svelte';

  let navEl: HTMLElement;

  const loggedIn = true;
  const observer = new IntersectionObserver(
    ([e]) =>
      e.target.classList.toggle(`bg-${bgColor}`, e.intersectionRatio < 1),
    { threshold: [1] },
  );

  onMount(() => {
    observer.observe(navEl);
  });

  export let bgColor: string = 'red-500';
</script>

<div
  bind:this={navEl}
  class="sticky -top-1 z-20 flex w-full items-center justify-between bg-transparent px-6 py-2 transition duration-500"
>
  <div class="flex gap-x-2 text-white">
    <!-- TODO: implement functionality to those buttons below -->
    <button class="rounded-full bg-black p-2">
      <Icon
        icon="material-symbols:arrow-back-ios-new-rounded"
        width="1rem"
        height="1rem"
      />
    </button>
    <button class="rounded-full bg-black p-2">
      <Icon
        icon="material-symbols:arrow-forward-ios-rounded"
        width="1rem"
        height="1rem"
      />
    </button>
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
</div>
