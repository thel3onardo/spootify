<script lang="ts">
  import Icon from '@iconify/svelte';
  import PlayButton from './button/PlayButton.svelte';
  import { createEventDispatcher } from 'svelte';

  export let coverUrl: string,
    coverAlt: string,
    name: string,
    description: string,
    showPlayBtn = true,
    showDeleteBtn = false,
    href: string;

  const dispatcher = createEventDispatcher();

  const emitDeleteBtnClick = () => dispatcher('clickDelete');
  const emitPlayBtnClick = () => dispatcher('clickPlay');
</script>

<a {href} class="w-full">
  <div
    class="duration-400 group relative flex flex-col rounded-lg bg-gray-900 p-4"
  >
    <div class="relative h-[150px] w-[150px] overflow-hidden rounded-md">
      <img src={coverUrl} alt={coverAlt} class="h-full w-full object-cover" />

      {#if showPlayBtn}
        <div class="play-btn hidden group-hover:block">
          <PlayButton
            on:click={emitPlayBtnClick}
            class="absolute bottom-2 right-2 "
            size="1.8rem"
            preventDefault
          />
        </div>
      {/if}
    </div>

    <div class="mt-4">
      <h2 class="mb-1 font-inter font-bold text-white">{name}</h2>
      <p class="font-manrope text-sm font-semibold text-gray-500">
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

<!-- <style>
  .play-btn {
    animation:
      opacityAnimation 0.45s ease,
      translateAnimation 0.25s ease;
  }
  @keyframes opacityAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }

  @keyframes translateAnimation {
    from {
      transform: translateY(10px);
    }
    to {
      transform: translateY(0);
    }
  }
</style> -->
