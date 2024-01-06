<script lang="ts">
  import Icon from '@iconify/svelte';

  let containerHovered = false;

  export let src: string, alt: string;
</script>

<div
  class="image-shadow h-[232px] max-w-[232px] grow overflow-hidden rounded-lg"
>
  {#if src}
    <img
      crossorigin="anonymous"
      {src}
      {alt}
      class="h-full w-full object-cover"
    />
  {:else}
    <button
      on:mouseenter={() => (containerHovered = true)}
      on:mouseleave={() => (containerHovered = false)}
      class="flex h-full w-full items-center justify-center bg-neutral-900 text-neutral-500"
    >
      {#if containerHovered}
        <div class="flex flex-col items-center gap-y-2 text-neutral-50">
          <Icon icon="ph:image" width="3rem" height="3rem" />
          <span class="font-semibold">Choose photo</span>
        </div>
      {:else}
        <Icon icon="ph:music-notes" width="5rem" height="5rem" />
      {/if}
    </button>
  {/if}
</div>
