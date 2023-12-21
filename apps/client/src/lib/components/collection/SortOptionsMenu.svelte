<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createDropdownMenu, melt } from '@melt-ui/svelte';
  import { fade } from 'svelte/transition';

  interface Option {
    label: string;
    identifier: string;
  }

  const {
    elements: { menu, item, trigger },
  } = createDropdownMenu({ positioning: { placement: 'right-start' } });

  let sortOptions = [
    { label: 'Title', identifier: 'title' },
    { label: 'Artist', identifier: 'artist' },
    { label: 'Album', identifier: 'album' },
    { label: 'Custom order', identifier: 'custom' },
    { label: 'Date added', identifier: 'date' },
    { label: 'Duration', identifier: 'duration' },
  ];
  let currentOption: Option = sortOptions[0];

  const setOption = (option: Option) => {
    currentOption = option;
  };
</script>

<button
  use:melt={$trigger}
  class="flex select-none items-center text-gray-500 transition hover:text-white"
>
  <span class="font-inter text-sm font-medium">{currentOption.label}</span>
  <Icon icon="ic:outline-arrow-drop-down" width="1.5rem" height="1.5rem" />
</button>

<div
  use:melt={$menu}
  transition:fade
  class="right-0 w-[200px] rounded bg-gray-800 p-2 font-manrope text-white"
>
  <div class="my-2 px-2">
    <span class="select-none text-xs font-bold text-gray-500">Sort by</span>
  </div>
  {#each sortOptions as option}
    <button
      use:melt={$item}
      on:m-click={() => setOption(option)}
      class="w-full rounded p-2 text-start font-medium transition hover:bg-gray-500/20 {option?.identifier ===
      currentOption?.identifier
        ? 'text-primary'
        : ''}"
    >
      <span class="text-sm">{option.label}</span>
    </button>{/each}
</div>
