<script lang="ts">
  export let name: string,
    rgbColor: string,
    redirectUrl: string,
    categoryCover: string;
</script>

<!-- TODO: Insert image cover in this component -->
<a href="/" class="h-[140px]">
  <div
    class="genre-item relative h-full w-full max-w-[200px] rounded-lg p-3 px-5"
    style="--theme-color: {rgbColor}"
  >
    <h2 class="font-manrope text-2xl font-bold">{name}</h2>
  </div>
</a>

<style>
  .genre-item {
    background-color: rgb(var(--theme-color));
    transition: box-shadow 0.2s ease-out;
  }

  .genre-item:hover {
    box-shadow: 0px 7px 20px rgba(var(--theme-color), 0.1);
  }
</style>
