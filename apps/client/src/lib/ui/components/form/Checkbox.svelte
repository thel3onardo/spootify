<script lang="ts">
  import Icon from "@iconify/svelte";
  import { createCheckbox, melt } from "@melt-ui/svelte";
  import { scale } from "svelte/transition";

  export let disabled = false,
    value: boolean,
    label: string;

  const {
    elements: { root, input },
    helpers: { isChecked },
  } = createCheckbox({
    defaultChecked: false,
    disabled,
  });

  isChecked.subscribe((state) => {
    value = state;
  });
</script>

<form>
  <div class="flex items-center">
    <button
      use:melt={$root}
      id="checkbox"
      class="flex h-6 w-6 appearance-none items-center justify-center rounded-lg bg-gray-950 text-primary hover:opacity-75"
    >
      {#if $isChecked}
        <div transition:scale={{ duration: 200, opacity: 0 }}>
          <Icon
            icon="solar:check-read-linear"
            class="text-primary"
            width="1.1rem"
            height="1.1rem"
          />
        </div>
      {/if}
      <input use:melt={$input} />
    </button>

    <label class="ml-2 text-sm text-gray-500" for="checkbox">{label}</label>
  </div>
</form>
