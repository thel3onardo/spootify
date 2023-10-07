<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createTooltip, melt } from '@melt-ui/svelte';

  export let label: string,
    delay = 500;

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
    class="z-10 rounded-lg bg-gray-800 text-white select-none"
  >
    <div use:melt={$arrow} />
    <p class="text-white text-sm font-manrope px-3 py-1">{label}</p>
  </div>
{/if}
