<script lang="ts">
  import Icon from '@iconify/svelte';
  import Tooltip from '../Tooltip.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const emitClick = (e: Event) => {
    dispatch('click', e);
  };

  export let icon: string,
    tooltipLabel: string,
    size = '1.25rem',
    hoverBg = false;
</script>

<!-- An icon button can accept slots (intended for texts) -->
<Tooltip label={tooltipLabel}>
  <button
    on:click={emitClick}
    class="{hoverBg
      ? 'rounded-full p-2 transition hover:bg-gray-100/20'
      : ''} flex select-none items-center {$$props.class}"
  >
    <!-- TODO: draggable="false" seems not to be working here -->
    <Icon {icon} width={size} height={size} draggable="false" />
    <slot />
  </button>
</Tooltip>
