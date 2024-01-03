<script lang="ts">
  import '@fontsource/inter/300.css';
  import '@fontsource/inter/400.css';
  import '@fontsource/inter/500.css';
  import '@fontsource/inter/600.css';
  import '@fontsource/inter/700.css';
  import '@fontsource/inter/800.css';
  import '@fontsource/manrope/700.css';
  import '@fontsource/manrope/600.css';
  import '@fontsource/manrope/500.css';
  import '@fontsource/manrope/400.css';

  import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
  import 'simplebar/dist/simplebar.css';

  import '../app.css';

  import Toast from '$lib/ui/components/Toast.svelte';
</script>

<Toast />

<slot />
