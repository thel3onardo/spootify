<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createDropdownMenu, melt } from '@melt-ui/svelte';

  interface Option {
    label: string;
    identifier: string;
  }

  const {
    elements: { menu, item, trigger, arrow },
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
  class="text-gray-500 flex items-center select-none hover:text-white transition"
>
  <span class="font-inter font-medium text-sm">{currentOption.label}</span>
  <Icon icon="ic:outline-arrow-drop-down" width="1.5rem" height="1.5rem" />
</button>

<div
  use:melt={$menu}
  class="bg-gray-800 text-white font-manrope w-[200px] p-1 right-0 rounded"
>
  <div class="my-2 px-2">
    <span class="text-xs font-bold select-none">Sort by</span>
  </div>
  {#each sortOptions as option}
    <button
      use:melt={$item}
      on:m-click={() => setOption(option)}
      class="hover:bg-gray-500/20 w-full text-start font-semibold p-2 transition {option?.identifier ===
      currentOption?.identifier
        ? 'text-primary'
        : ''}"
    >
      <span class="text-sm">{option.label}</span>
    </button>{/each}
</div>
