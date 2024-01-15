<script lang="ts">
  import Icon from '@iconify/svelte';
  import DropdownMenu from '../DropdownMenu.svelte';
  import { createEventDispatcher } from 'svelte';

  type ViewMode = keyof typeof viewModeList;

  const dispatch = createEventDispatcher();
  const emitSwichViewMode = (newViewMode: string) => {
    dispatch('switchViewMode', newViewMode);
  };
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
  };

  export let mode: ViewMode;
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
    <button
      on:click={() => emitSwichViewMode(viewModeList.compact.id)}
      class="flex w-full items-center justify-between rounded p-2 text-start font-medium transition hover:bg-gray-500/20 {viewModeList[
        mode
      ].id === 'compact'
        ? 'text-primary'
        : ''}"
    >
      <div class="flex items-center gap-x-2">
        <Icon icon={viewModeList.compact.icon} width="1.3rem" height="1.3rem" />
        <span class="text-sm">{viewModeList.compact.label}</span>
      </div>

      {#if viewModeList[mode].id === 'compact'}
        <Icon icon="solar:check-read-outline" width="1.3rem" height="1.3rem" />
      {/if}
    </button>
    <button
      on:click={() => emitSwichViewMode(viewModeList.list.id)}
      class="flex w-full items-center justify-between rounded p-2 text-start font-medium transition hover:bg-gray-500/20 {viewModeList[
        mode
      ].id === 'list'
        ? 'text-primary'
        : ''}"
    >
      <div class="flex items-center gap-x-2">
        <Icon icon={viewModeList.list.icon} width="1.3rem" height="1.3rem" />
        <span class="text-sm">{viewModeList.list.label}</span>
      </div>

      {#if viewModeList[mode].id === 'list'}
        <Icon icon="solar:check-read-outline" width="1.3rem" height="1.3rem" />
      {/if}
    </button>
  </div>
</DropdownMenu>
