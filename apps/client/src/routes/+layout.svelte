<script lang="ts">
  import "../app.css";

  let counter = 0;

  const handleClick = () => {
    counter++;
  };
</script>

<slot />
<span>{counter}</span>
<button on:click={handleClick} class="bg-red-500/30 px-4 py-2"
  >click here</button
>
