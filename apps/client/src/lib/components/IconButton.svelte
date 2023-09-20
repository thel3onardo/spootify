<script lang="ts">
  import Icon from '@iconify/svelte';
  import Tooltip from './Tooltip.svelte';
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

<Tooltip label={tooltipLabel}>
  <button
    on:click={emitClick}
    class={hoverBg ? 'hover:bg-gray-100/20 p-2 rounded-full transition' : ''}
  >
    <Icon {icon} width={size} height={size} class={$$props.class} />
  </button>
</Tooltip>
