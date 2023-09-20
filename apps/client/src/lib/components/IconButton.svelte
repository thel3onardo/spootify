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
    size = '1.25rem';
</script>

<Tooltip label={tooltipLabel}>
  <button on:click={emitClick}>
    <Icon {icon} width={size} height={size} class={$$props.class} />
  </button>
</Tooltip>
