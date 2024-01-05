<script lang="ts" context="module">
  export type ToastData = {
    description: string;
    colorClass: string;
    icon: string;
  };

  const {
    elements: { content, title, description, close },
    helpers,
    states: { toasts },
    actions: { portal },
  } = createToaster<ToastData>();

  export const addToast = helpers.addToast;
</script>

<script lang="ts">
  import { fly } from "svelte/transition";
  import { createToaster, melt } from "@melt-ui/svelte";
  import Icon from "@iconify/svelte";
</script>

<div
  class="fixed right-0 top-0 z-50 m-4 flex flex-col items-end gap-2 md:bottom-3 md:top-auto"
  use:portal
>
  {#each $toasts as { id, data } (id)}
    <div
      use:melt={$content(id)}
      transition:fly={{ x: 20, opacity: 0 }}
      class="rounded-xl bg-gray-950 text-gray-400 shadow-md"
    >
      <div
        class="relative flex w-[24rem] max-w-[calc(100vw-2rem)] items-center gap-3 p-5"
      >
        <Icon
          icon={data.icon}
          width="2rem"
          height="2rem"
          class={data.colorClass}
        />
        <p use:melt={$description(id)}>
          {data.description}
        </p>
        <button
          use:melt={$close(id)}
          class="absolute right-2 top-2 rounded-full bg-gray-950 p-2
          hover:bg-gray-800 hover:text-white"
        >
          <Icon icon="ph:x-bold" width="1rem" height="1rem" />
        </button>
      </div>
    </div>
  {/each}
</div>
