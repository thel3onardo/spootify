<script lang="ts">
  import '@fontsource-variable/inter';
  import '../app.css';

  let counter = 0;

  const handleClick = () => {
    counter++;
  };
</script>

<div class="font-inter">
  <slot />
  <span>{counter}</span>
  <button on:click={handleClick} class="bg-red-500/30 px-4 py-2 font-bold"
    >click here</button
  >
</div>
