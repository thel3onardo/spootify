<script lang="ts">
  import { playTrack } from '$lib/stores/track';
  import { secondsToMinutes } from '$lib/utils';
  import Icon from '@iconify/svelte';

  const formatDate = (date: string) => {
    // expected date as ISO 8601 format
    const dateFormat = new Date(date).toString().split(' ');
    const day = dateFormat[1];
    const month = dateFormat[2];
    const year = dateFormat[3];

    return `${day} ${month}, ${year}`;
  };

  export let name: string,
    id: number,
    coverImageUrl: string,
    addedAt: string,
    author: { name: string; id: string },
    duration: number,
    index: number,
    isCompact = false;
</script>

<button on:click={() => playTrack(id)} class="w-full">
  <div
    class="{isCompact
      ? 'h-[40px] grid-cols-[16px_6fr_4fr_4fr_3fr_1fr]'
      : 'h-[60px] grid-cols-[16px_6fr_4fr_3fr_1fr]'} group grid items-center gap-4 rounded-lg px-4 text-start font-inter text-sm text-neutral-400 hover:bg-neutral-800"
  >
    <div>
      <span class="visible group-hover:hidden">{index}</span>
      <Icon
        icon="ph:play-fill"
        height="1rem"
        width="1rem"
        class="hidden text-neutral-300 group-hover:block"
      />
    </div>
    <div class="flex items-center">
      {#if !isCompact}
        <div class="mr-4 h-[45px] w-[45px] overflow-hidden rounded-lg">
          <img src={coverImageUrl} class="h-full object-cover" alt="#" />
        </div>
      {/if}
      <div class="text-start text-sm">
        <h4 class="mb-0 font-medium text-neutral-50">{name}</h4>
        {#if !isCompact}
          <span>
            <a href="/" class="hover:underline">{author.name}</a>
          </span>
        {/if}
      </div>
    </div>
    {#if isCompact}
      <div>
        <span>{author.name}</span>
      </div>
    {/if}
    <div>
      <span>Starboy</span>
    </div>
    <div>
      <span>{formatDate(addedAt)}</span>
    </div>
    <div>
      <span>{secondsToMinutes(duration)}</span>
    </div>
  </div>
</button>
