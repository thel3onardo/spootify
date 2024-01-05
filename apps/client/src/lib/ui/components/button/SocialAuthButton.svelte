<script lang="ts">
  import Icon from '@iconify/svelte';

  export let icon: string;
</script>

<button
  on:click={() => dispatchEvent(new MouseEvent('click'))}
  class="mb-4 flex w-full items-center justify-center rounded-3xl border border-transparent bg-gray-950 p-3 text-gray-400 hover:border-gray-700"
>
  <Icon {icon} width="1.25rem" height="1.25rem" />
  <span class="font-manrope ml-3 text-sm font-medium">
    <slot />
  </span>
</button>
