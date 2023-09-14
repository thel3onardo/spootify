<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<button
  class="bg-primary rounded-full p-3 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 active:scale-95 transition {$$props.class}"
  on:click={() => dispatch('click')}
>
  <Icon
    icon="ic:baseline-play-arrow"
    width="40px"
    height="40px"
    class="text-black"
  />
</button>
