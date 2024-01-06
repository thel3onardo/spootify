<script lang="ts">
  //TODO

  import Icon from '@iconify/svelte';

  const download = () => {
    //todo
  };
</script>

<button on:click={download}>
  <Icon
    icon="ph:download-simple-bold"
    width="2rem"
    height="2rem"
    class="text-neutral-400 transition hover:text-white {$$props.class}"
  />
</button>
