<script lang="ts">
  import Icon from '@iconify/svelte';

  export let trackId: number, size: string, favorite: boolean;

  const toggleFavorite = () => {
    //TODO: this toggle should be handled here?
  };
</script>

<button
  on:click={toggleFavorite}
  class="{favorite
    ? 'text-primary'
    : 'text-gray-500 hover:text-white'} transition"
>
  <Icon
    icon={favorite ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'}
    width={size}
    height={size}
  />
</button>
