<script lang="ts">
  import { playingNowMenuVisible } from '$lib/stores/layout';

  import IconButton from '../IconButton.svelte';

  const handleTogglePlayingNowMenu = () => {
    $playingNowMenuVisible = !$playingNowMenuVisible;
  };

  const options = [
    {
      icon: 'mdi:music-box',
      tooltipLabel: 'Playing now',
      action: handleTogglePlayingNowMenu,
      active: false,
    },
    {
      icon: 'material-symbols:volume-up-rounded',
      tooltipLabel: 'Volume',
      action: () => '',
      active: false,
    },
    {
      icon: 'material-symbols:lyrics',
      tooltipLabel: 'Lyrics',
      action: () => '',
      active: false,
    },
    {
      icon: 'material-symbols:info-outline-rounded',
      tooltipLabel: 'Help',
      action: () => '',
      active: false,
    },
  ];
</script>

<div class="flex gap-x-4">
  {#each options as { icon, tooltipLabel, action }}
    <IconButton
      on:click={action}
      {tooltipLabel}
      {icon}
      size="1.35rem"
      hoverBg
    />
  {/each}
</div>
