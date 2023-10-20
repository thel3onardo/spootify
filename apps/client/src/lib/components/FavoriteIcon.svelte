<script lang="ts">
  import IconButton from './IconButton.svelte';

  export let trackId: number, size: string, favorite: boolean;

  const toggleFavorite = () => {
    //TODO: proper implement this functionality making an API call
  };
</script>

<IconButton
  on:click={toggleFavorite}
  {size}
  icon={favorite ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'}
  tooltipLabel={favorite ? 'Remove from your library' : 'Save to your library'}
  class="{favorite
    ? 'text-primary'
    : 'text-gray-500 hover:text-white'} transition"
></IconButton>
