<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createTooltip, melt } from '@melt-ui/svelte';

  export let label: string,
    delay = 300;

  const {
    elements: { trigger, content, arrow },
    states: { open },
  } = createTooltip({
    positioning: { placement: 'top' },
    openDelay: delay,
    forceVisible: true,
  });
</script>

<div use:melt={$trigger} class="flex items-center">
  <slot />
</div>

{#if $open}
  <div
    use:melt={$content}
    transition:fade={{ duration: 100 }}
    class="z-10 select-none rounded-lg bg-gray-800 text-white"
  >
    <div use:melt={$arrow} />
    <p class="px-3 py-1 font-manrope text-sm font-semibold text-white">
      {label}
    </p>
  </div>
{/if}
