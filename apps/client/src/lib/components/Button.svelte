<script lang="ts">
  export let background = false;
</script>

<button
  class="{background
    ? 'bg-white'
    : 'bg-transparent'} text-black font-bold px-8 py-3 rounded-3xl shadow-lg"
>
  <slot />
</button>
