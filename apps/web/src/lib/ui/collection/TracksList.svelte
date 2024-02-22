<script lang="ts">
  import Icon from '@iconify/svelte';
  import TrackItem from '$lib/ui/collection/TrackItem.svelte';
  import type { ViewModeType } from './ViewMode.svelte';

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

  const tableSectionsItems = ['#', 'Title', 'Artist', 'Album', 'Date added'];
  const generateTableSections = (viewMode: ViewModeType): string[] => {
    if (viewMode === 'compact') return tableSectionsItems;

    return tableSectionsItems.filter((el) => el !== 'Artist');
  };

  export let tracks: ITrack[], viewMode: ViewModeType;
</script>

<div class="text-neutral-400 {$$props.class}">
  <div
    class="{viewMode === 'compact'
      ? 'grid-cols-[16px_6fr_4fr_4fr_3fr_1fr]'
      : 'grid-cols-[16px_6fr_4fr_3fr_1fr]'} font-manrope mb-4 grid select-none gap-4 border-b border-neutral-800 px-4 py-2 text-sm font-medium"
  >
    {#each generateTableSections(viewMode) as section}
      <span>{section}</span>
    {/each}
    <Icon
      icon="material-symbols:alarm-outline"
      width="1.2rem"
      height="1.2rem"
    />
  </div>
  {#each tracks as track, index}
    <TrackItem
      index={index + 1}
      id={track.id}
      name={track.name}
      coverImageUrl={track.coverImage}
      author={track.author}
      addedAt={track.addedAt}
      duration={track.duration}
      isCompact={viewMode === 'compact'}
    />
  {/each}
</div>
