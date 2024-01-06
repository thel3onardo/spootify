<script lang="ts">
  import Icon from '@iconify/svelte';
  import { clickOutside } from '$lib/directives/clickOutside';

  let visible = false;

  const toggleVisible = () => {
    visible = !visible;
  };

  export let placeholder: string, value: any;
</script>

<!--TODO: Add svelte transitions / Implement search filter feature -->
<div class="text-neutral-400">
  {#if visible}
    <form
      use:clickOutside
      on:clickOutside={toggleVisible}
      class="flex items-center rounded bg-gray-500/20 px-2 py-2"
    >
      <Icon
        icon="iconamoon:search-bold"
        width="1.25rem"
        height="1.25rem"
        class="mr-2"
      />
      <input
        bind:value
        {placeholder}
        class="bg-transparent text-sm outline-none"
      />
    </form>
  {:else}
    <button
      on:click={toggleVisible}
      class="rounded-full p-2 hover:bg-gray-500/20 hover:text-white"
    >
      <Icon icon="iconamoon:search-bold" width="1.25rem" height="1.25rem" />
    </button>
  {/if}
</div>
