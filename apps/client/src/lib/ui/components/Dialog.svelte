<script lang="ts">
  import { createDialog, melt } from '@melt-ui/svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import X from './button/X.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const {
    elements: { overlay, content, title, description, close, portalled },
    states: { open },
  } = createDialog({
    forceVisible: true,
    defaultOpen: true,
    closeOnOutsideClick: true,
  });

  open.subscribe((openValue) => {
    if (!openValue) dispatch('close', true);
  });

  export let closeIcon = false;
</script>

<div class="" use:melt={$portalled}>
  {#if $open}
    <div
      use:melt={$overlay}
      class="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm transition-all"
      transition:fade={{ duration: 150 }}
    />
    <div
      class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
              max-w-[550px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-neutral-900
              p-8 shadow-lg"
      use:melt={$content}
    >
      {#if closeIcon}
        <div use:melt={$close}>
          <X size="1.25rem" class="absolute right-6 top-6 text-neutral-400" />
        </div>
      {/if}
      <h2
        use:melt={$title}
        class="m-0 font-inter text-2xl font-bold text-neutral-50"
      >
        <slot name="title" />
      </h2>
      <p
        use:melt={$description}
        class="mb-5 mt-2 leading-normal text-neutral-400"
      >
        <slot name="description" />
      </p>
      <slot name="content" />
    </div>
  {/if}
</div>
