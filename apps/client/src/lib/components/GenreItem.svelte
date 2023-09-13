<script lang="ts">
  export let name: string,
    rgbColor: string,
    redirectUrl: string,
    categoryCover: string;
</script>

<a href={redirectUrl}>
  <div
    class="p-5 relative rounded-lg w-[210px] h-[210px] genre-item"
    style="--theme-color: {rgbColor}"
  >
    <h2 class="font-manrope font-bold text-2xl">{name}</h2>
  </div>
</a>

<style>
  .genre-item {
    background-color: rgb(var(--theme-color));
    transition:
      box-shadow 0.2s ease-out,
      transform 0.4s ease;
  }

  .genre-item:hover {
    transform: translateY(-5px);
    box-shadow: 0px 7px 20px rgba(var(--theme-color), 0.4);
  }
</style>
