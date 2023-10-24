<script lang="ts">
  import { createDropdownMenu, melt } from '@melt-ui/svelte';

  const {
    elements: { menu, item, trigger },
    states: { open },
  } = createDropdownMenu({ positioning: { placement: 'bottom-end' } });
</script>

<div use:melt={$trigger}>
  <slot name="trigger" />
</div>

{#if $open}
  <div use:melt={$menu} class={$$props.class}>
    <slot name="options" />
  </div>
{/if}
