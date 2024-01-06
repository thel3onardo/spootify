<script lang="ts">
  import { createRadioGroup, melt } from '@melt-ui/svelte';

  const {
    elements: { root, item, hiddenInput },
    helpers: { isChecked },
  } = createRadioGroup({
    defaultValue: 'default',
  });

  export let options: string[];
</script>

<div
  use:melt={$root}
  class="flex flex-col gap-3 data-[orientation=horizontal]:flex-row"
  aria-label="View density"
>
  {#each options as option}
    <div class="flex items-center gap-3">
      <button
        use:melt={$item(option)}
        class="hover:bg-magnum-100 grid h-6 w-6 cursor-default place-items-center rounded-full bg-gray-800
        shadow-sm"
        id={option}
        aria-labelledby="{option}-label"
      >
        {#if $isChecked(option)}
          <div class="h-3 w-3 rounded-full bg-primary" />
        {/if}
      </button>
      <label
        class="text-sm capitalize leading-none text-gray-400"
        for={option}
        id="{option}-label"
      >
        {option}
      </label>
    </div>
  {/each}
  <input name="line-height" use:melt={$hiddenInput} />
</div>
