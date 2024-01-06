<script lang="ts">
  import { createSwitch, melt } from '@melt-ui/svelte';

  const {
    elements: { root, input },
    options: { onCheckedChange },
  } = createSwitch({
    defaultChecked: false,
  });

  export let value;

  onCheckedChange?.subscribe((state) => {
    value = state;
  });
</script>

<form>
  <div class="flex items-center">
    <button
      use:melt={$root}
      class="relative mr-2 cursor-default rounded-full bg-gray-700 py-[1px] transition-colors data-[state=checked]:bg-primary"
      id="airplane-mode"
      aria-labelledby="airplane-mode-label"
    >
      <span class="thumb block rounded-full bg-gray-950 transition" />
    </button>
    <label
      class="select-none leading-none text-gray-500"
      for="airplane-mode"
      id="airplane-mode-label"
    >
      <slot />
    </label>

    <input use:melt={$input} />
  </div>
</form>

<style>
  button {
    --w: 2.5rem;
    --padding: 0.13rem;
    width: var(--w);
  }

  .thumb {
    --size: 0.95rem;
    width: var(--size);
    height: var(--size);
    transform: translateX(var(--padding));
  }

  :global([data-state='checked']) .thumb {
    transform: translateX(calc(var(--w) - var(--size) - var(--padding)));
  }
</style>
