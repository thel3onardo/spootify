<script lang="ts">
  import '@fontsource/inter/300.css';
  import '@fontsource/inter/400.css';
  import '@fontsource/inter/500.css';
  import '@fontsource/inter/600.css';
  import '@fontsource/inter/700.css';
  import '@fontsource/manrope/700.css';
  import '@fontsource/manrope/600.css';
  import '@fontsource/manrope/500.css';
  import '@fontsource/manrope/400.css';

  import '../app.css';

  import LayoutWrapper from '$lib/components/Layout/LayoutWrapper.svelte';
</script>

<LayoutWrapper>
  <slot />
</LayoutWrapper>
