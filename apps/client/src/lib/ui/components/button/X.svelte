<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let size: string;
</script>

<button
  on:click={() => dispatch('click')}
  aria-label="close"
  class="{$$props.class} flex h-8 w-8 cursor-default items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800"
>
  <Icon icon="heroicons:x-mark-16-solid" width={size} height={size} />
</button>
