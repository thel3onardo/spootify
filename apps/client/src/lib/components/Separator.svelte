<script lang="ts">
  import { createSeparator, melt } from '@melt-ui/svelte';

  const {
    elements: { root: horizontal },
  } = createSeparator({
    orientation: 'horizontal',
  });
</script>

<div
  use:melt={$horizontal}
  class="h-px w-full bg-neutral-800 {$$props.class}"
/>
