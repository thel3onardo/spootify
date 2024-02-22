<script lang="ts" context="module">
  const viewModeList = {
    compact: {
      id: 'compact',
      icon: 'solar:hamburger-menu-outline',
      label: 'Compact',
    },
    list: {
      id: 'list',
      icon: 'solar:list-outline',
      label: 'List',
    },
  } satisfies ViewModeList;

  export type ViewModeList = Record<
    string,
    { id: string; icon: string; label: string }
  >;
  export type ViewModeType = keyof typeof viewModeList;
</script>

<script lang="ts">
  import Icon from '@iconify/svelte';
  import DropdownMenu from '$lib/ui/components/DropdownMenu.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const emitSwichViewMode = (newViewMode: string) => {
    dispatch('switchViewMode', newViewMode);
  };

  export let mode: ViewModeType;
</script>

<DropdownMenu placement="bottom-end" variant="dark" class="w-[180px] p-2">
  <button slot="trigger" draggable="false">
    <div
      class="flex select-none items-center gap-x-1 text-neutral-400 transition hover:text-neutral-50"
    >
      <span class="text-sm font-semibold">{viewModeList[mode].label}</span>
      <Icon icon={viewModeList[mode].icon} width="1.5rem" height="1.5rem" />
    </div>
  </button>

  <div slot="options">
    <div class="mb-2 px-2">
      <span
        class="select-none font-inter text-xs font-semibold text-neutral-500"
        >View as</span
      >
    </div>
    {#each Object.values(viewModeList) as viewMode}
      <button
        on:click={() => emitSwichViewMode(viewMode.id)}
        class:text-primary={viewModeList[mode].id === viewMode.id}
        class="flex w-full items-center justify-between rounded p-2 text-start font-medium transition hover:bg-gray-500/20"
      >
        <div class="flex items-center gap-x-2">
          <Icon icon={viewMode.icon} width="1.3rem" height="1.3rem" />
          <span class="text-sm">{viewMode.label}</span>
        </div>

        {#if viewModeList[mode].id === viewMode.id}
          <Icon
            icon="solar:check-read-outline"
            width="1.3rem"
            height="1.3rem"
          />
        {/if}
      </button>
    {/each}
  </div>
</DropdownMenu>
