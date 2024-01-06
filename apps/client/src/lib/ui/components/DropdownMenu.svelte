<script lang="ts">
  import { createDropdownMenu, melt } from '@melt-ui/svelte';
  import { fly } from 'svelte/transition';

  const {
    elements: { menu, trigger },
    states: { open },
  } = createDropdownMenu({ positioning: { placement: 'bottom-start' } });
</script>

<div use:melt={$trigger}>
  <slot name="trigger" />
</div>

{#if $open}
  <!-- TODO: implement custom transitions/durations-->
  <div
    use:melt={$menu}
    transition:fly={{ duration: 300, y: -10 }}
    class="rounded bg-neutral-800 p-1 {$$props.class}"
  >
    <slot name="options" />
  </div>
{/if}
