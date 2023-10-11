<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let size = '40px';
</script>

<button
  class="bg-primary rounded-full p-2 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 active:scale-95 transition {$$props.class}"
  on:click={() => dispatch('click')}
>
  <Icon
    icon="ic:baseline-play-arrow"
    width={size}
    height={size}
    class="text-black"
  />
</button>
