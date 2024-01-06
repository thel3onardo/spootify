<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const emitClick = () => {
    dispatch('click');
  };

  export let icon: string;
</script>

<button
  on:click={emitClick}
  class="mb-4 flex w-full items-center justify-center rounded-3xl border border-transparent bg-gray-950 p-3 text-gray-400 hover:border-gray-700"
>
  <Icon {icon} width="1.25rem" height="1.25rem" />
  <span class="ml-3 font-manrope text-sm font-semibold">
    <slot />
  </span>
</button>
