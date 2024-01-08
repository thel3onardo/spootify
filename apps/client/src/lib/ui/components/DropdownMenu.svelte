<script lang="ts">
  import { createDropdownMenu, melt } from '@melt-ui/svelte';
  import type { FloatingConfig } from '@melt-ui/svelte/internal/actions';
  import { fly } from 'svelte/transition';

  type MenuPlacement = FloatingConfig['placement'];

  type VariantList = Record<string, string>;
  type VariantProp = keyof typeof variantList;

  const variantList = {
    light: 'bg-gray-800 text-neutral-400',
    dark: 'bg-neutral-900 text-neutral-400',
  } satisfies VariantList;

  export let variant: VariantProp, placement: MenuPlacement;

  const {
    elements: { menu, trigger },
    states: { open },
  } = createDropdownMenu({ positioning: { placement } });
</script>

<div use:melt={$trigger}>
  <slot name="trigger" />
</div>

{#if $open}
  <div
    use:melt={$menu}
    transition:fly={{ duration: 300, y: -10 }}
    class="relative z-40 rounded p-1 {$$props.class} {variantList[variant]}"
  >
    <slot name="options" />
  </div>
{/if}
