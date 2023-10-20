<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const emitClick = () => {
    dispatch('click');
  };

  export let size = '2.5rem';
</script>

<button
  class="rounded-full bg-primary p-2 transition hover:scale-105 hover:shadow-xl hover:shadow-primary/10 active:scale-95 {$$props.class}"
  on:click={emitClick}
>
  <Icon
    icon="ic:baseline-play-arrow"
    width={size}
    height={size}
    class="text-black"
  />
</button>
