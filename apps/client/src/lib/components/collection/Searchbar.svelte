<script lang="ts">
  import Icon from '@iconify/svelte';

  let visible = false;
  let value;

  const toggleVisible = () => {
    visible = !visible;
  };
</script>

<div class="text-gray-500">
  {#if visible}
    <form class="flex items-center bg-gray-500/20 px-2 py-1 rounded">
      <Icon
        icon="iconamoon:search-bold"
        width="1rem"
        height="1rem"
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
      on:click={toggleVisible}
      class="p-2 rounded-full transition hover:bg-gray-500/20 hover:text-white"
    >
      <Icon icon="iconamoon:search-bold" width="1.25rem" height="1.25rem" />
    </button>
  {/if}
</div>
