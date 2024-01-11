<script lang="ts">
  import Icon from '@iconify/svelte';
  import TrackItem from './TrackItem.svelte';
  import { number, string } from 'zod';

  interface ITrack {
    id: number;
    name: string;
    coverImage: string;
    author: {
      name: string;
      id: string;
    };
    addedAt: string;
    duration: number;
  }

  const tableSections = ['#', 'Title', 'Album', 'Date added'];

  export let tracks: ITrack[];
</script>

<div class="text-neutral-400 {$$props.class}">
  <div
    class="font-manrope mb-4 grid grid-cols-[16px_6fr_4fr_3fr_1fr] gap-4 border-b border-neutral-800 px-4 py-2 text-sm font-medium"
  >
    {#each tableSections as section}
      <span>{section}</span>
    {/each}
    <Icon
      icon="material-symbols:alarm-outline"
      width="1.2rem"
      height="1.2rem"
    />
  </div>
  {#each tracks as track}
    <TrackItem
      id={track.id}
      name={track.name}
      coverImageUrl={track.coverImage}
      author={track.author}
      addedAt={track.addedAt}
      duration={track.duration}
    />
  {/each}
</div>
