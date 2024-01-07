<script lang="ts">
  import Icon from '@iconify/svelte';
  import { FastAverageColor } from 'fast-average-color';
  import { createEventDispatcher, onMount } from 'svelte';
  import IconButton from '../button/IconButton.svelte';
  import DropdownMenu from '../DropdownMenu.svelte';

  export let src: string,
    alt: string,
    shadow = false,
    hasOptions = false;

  let imageHovered = true;
  let showOptionsMenu = false;

  const dispatch = createEventDispatcher();
  const emitOpenDialog = () => {
    dispatch('openDialog', true);
  };
</script>

<div
  class:image-shadow={shadow}
  class="growrounded-lg relative h-full w-full {$$props.class}"
>
  {#if src}
    <img
      crossorigin="anonymous"
      {src}
      {alt}
      class="h-full w-full object-cover"
    />
  {:else}
    <button
      on:click={emitOpenDialog}
      class="flex h-full w-full cursor-default items-center justify-center rounded-lg bg-neutral-800 text-neutral-500"
    >
      {#if imageHovered}
        <div class="flex flex-col items-center text-neutral-50">
          <Icon icon="ph:image" width="3rem" height="3rem" />
          <span class="text-sm font-semibold text-neutral-400"
            >Choose photo</span
          >
        </div>

        {#if hasOptions}
          <div class="absolute right-3 top-3">
            <DropdownMenu variant="dark" placement="bottom-end">
              <button
                slot="trigger"
                on:click={() => (showOptionsMenu = true)}
                class="flex h-8 w-8 cursor-default items-center justify-center rounded-full bg-neutral-900 text-neutral-400 hover:text-neutral-50"
              >
                <Icon
                  icon="solar:menu-dots-bold"
                  width="1.3rem"
                  height="1.3rem"
                />
              </button>
              <div class="flex w-[150px] flex-col" slot="options">
                <button
                  class="flex items-center gap-x-2 p-2 text-neutral-400 hover:bg-neutral-800"
                >
                  <Icon icon="ph:image-light" width="1.2rem" height="1.2rem" />
                  <span class="text-sm font-medium text-neutral-400"
                    >Change photo</span
                  >
                </button>
                <button
                  class="flex items-center gap-x-2 p-2 text-neutral-400 hover:bg-neutral-800"
                >
                  <Icon icon="ph:trash-simple" width="1.2rem" height="1.2rem" />
                  <span class="text-sm font-medium text-neutral-400"
                    >Remove photo</span
                  >
                </button>
              </div>
            </DropdownMenu>
          </div>
        {/if}
      {:else}
        <Icon icon="ph:music-notes" width="5rem" height="5rem" />
      {/if}
    </button>
  {/if}
</div>

<style>
  .image-shadow {
    box-shadow: 0px 0px 5rem 1rem rgba(10, 10, 10, 0.5);
  }
</style>
