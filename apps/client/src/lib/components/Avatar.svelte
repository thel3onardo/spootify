<script lang="ts">
  import { createAvatar, melt } from '@melt-ui/svelte';

  export let src: string;

  const {
    elements: { image, fallback },
  } = createAvatar({
    src,
  });
</script>

<div class="flex items-center justify-center rounded-full {$$props.class}">
  <img
    use:melt={$image}
    alt="Avatar"
    class="h-full w-full rounded-[inherit] object-cover"
  />
  <span use:melt={$fallback} class="text-magnum-700 text-3xl font-medium"
    >RH</span
  >
</div>
