<script lang="ts">
  import Icon from '@iconify/svelte';
  import IconButton from '../IconButton.svelte';

  export let favorite = false;

  const options: Array<{ icon: string; tooltipLabel: string }> = [
    {
      icon: `${
        favorite ? 'material-symbols:favorite-rounded' : 'ph:heart-bold'
      }`,
      tooltipLabel: 'Favorite',
    },
    { icon: 'material-symbols:volume-up-rounded', tooltipLabel: 'Volume' },
    { icon: 'material-symbols:lyrics', tooltipLabel: 'Lyrics' },
    { icon: 'material-symbols:info-outline-rounded', tooltipLabel: 'Help' },
  ];
</script>

<div class="flex gap-x-4">
  {#each options as { icon, tooltipLabel }}
    <IconButton {tooltipLabel} {icon} size="1.35rem" hoverBg />
  {/each}
</div>
