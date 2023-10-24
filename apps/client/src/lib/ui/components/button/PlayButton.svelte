<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const emitClick = (e: MouseEvent) => {
    if (preventDefault) e.preventDefault();

    dispatch('click');
  };

  export let size = '2.5rem';
  export let preventDefault = false;
</script>

<button
  class="bg-primary hover:shadow-primary/10 rounded-full p-2 transition hover:scale-105 hover:shadow-xl active:scale-95 {$$props.class}"
  on:click={emitClick}
>
  <Icon
    icon="ic:baseline-play-arrow"
    width={size}
    height={size}
    class="text-black"
  />
</button>
