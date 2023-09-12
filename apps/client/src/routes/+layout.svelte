<script lang="ts">
  import '@fontsource/inter/300.css';
  import '@fontsource/inter/400.css';
  import '@fontsource/inter/500.css';
  import '@fontsource/inter/600.css';
  import '@fontsource/inter/700.css';
  import '@fontsource/manrope';

  import '../app.css';

  import LayoutWrapper from '$lib/components/Layout/LayoutWrapper.svelte';
</script>

<LayoutWrapper>
  <slot />
</LayoutWrapper>
