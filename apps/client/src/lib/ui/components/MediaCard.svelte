<script lang="ts">
  import Icon from '@iconify/svelte';
  import PlayButton from './button/PlayButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';

  export let coverUrl: string,
    coverAlt: string,
    name: string,
    description: string,
    showDeleteBtn = false,
    href: string;

  let showPlayBtn = false;

  const dispatcher = createEventDispatcher();

  const emitDeleteBtnClick = () => dispatcher('clickDelete');
  const emitPlayBtnClick = () => dispatcher('clickPlay');

  const toggleShowPlayBtn = () => {
    showPlayBtn = !showPlayBtn;
  };
</script>

<a
  {href}
  class="w-full"
  on:mouseenter={toggleShowPlayBtn}
  on:mouseleave={toggleShowPlayBtn}
>
  <div
    class="duration-400 group relative flex flex-col rounded-lg bg-gray-950 p-4 transition-colors duration-300 hover:bg-neutral-800"
  >
    <div class="relative h-[150px] w-[150px] overflow-hidden rounded-md">
      <img src={coverUrl} alt={coverAlt} class="h-full w-full object-cover" />

      {#if showPlayBtn}
        <div transition:fly={{ y: 20, duration: 300, opacity: 0 }}>
          <PlayButton
            on:click={emitPlayBtnClick}
            class="absolute bottom-2 right-2 "
            size="1.8rem"
            preventDefault
          />
        </div>
      {/if}
    </div>

    <div class="mt-4 text-sm">
      <h2 class="mb-1 font-inter font-bold text-neutral-50">{name}</h2>
      <p class="font-manrope font-semibold text-neutral-400">
        {description}
      </p>
    </div>

    {#if showDeleteBtn}
      <button
        on:click|preventDefault={emitDeleteBtnClick}
        class="absolute right-2 top-2 cursor-default rounded-full bg-gray-900/80 p-0.5 transition hover:scale-110"
      >
        <Icon
          icon="material-symbols:close-rounded"
          width="1.4rem"
          height="1.4rem"
          class="text-white"
        />
      </button>
    {/if}
  </div>
</a>
