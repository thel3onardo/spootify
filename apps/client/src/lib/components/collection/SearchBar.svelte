<script lang="ts">
  import Icon from '@iconify/svelte';
  import { clickOutside } from '$lib/directives/clickOutside';
  import { fade, slide } from 'svelte/transition';
  import { circOut } from 'svelte/easing';

  let visible = false;
  let value;

  const toggleVisible = () => {
    visible = !visible;
  };
</script>

<div class="grid grid-cols-1 grid-rows-1 text-gray-500">
  {#if visible}
    <form
      transition:slide={{ axis: 'x', easing: circOut }}
      use:clickOutside
      on:clickOutside={toggleVisible}
      class="flex items-center bg-gray-500/20 px-2 py-1 rounded"
    >
      <Icon
        icon="iconamoon:search-bold"
        width="1.25rem"
        height="1.25rem"
        class="mr-2"
      />
      <input
        bind:this={value}
        placeholder="what"
        class="bg-transparent outline-none"
      />
    </form>
  {:else}
    <button
      transition:fade
      on:click={toggleVisible}
      class="p-2 rounded-full transition hover:bg-gray-500/20 hover:text-white"
    >
      <Icon icon="iconamoon:search-bold" width="1.25rem" height="1.25rem" />
    </button>
  {/if}
</div>
