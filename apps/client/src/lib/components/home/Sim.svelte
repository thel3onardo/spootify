<script lang="ts">
  import PlayButton from '../PlayButton.svelte';

  export let coverUrl: string,
    coverAlt: string,
    name: string,
    description: string;
</script>

<a href="" class="w-full">
  <div
    class="duration-250 group flex flex-col rounded-lg bg-gray-950 p-4 transition hover:bg-gray-900"
  >
    <div class="relative h-[150px] w-[150px] overflow-hidden rounded-md">
      <img src={coverUrl} alt={coverAlt} class="h-full w-full object-cover" />

      <div class="play-btn hidden transform-gpu group-hover:block">
        <PlayButton class="absolute bottom-2 right-2 " size="1.8rem" />
      </div>
    </div>
    <div class="mt-4">
      <h2 class="font-inter mb-1 font-bold text-white">{name}</h2>
      <p class="font-manrope text-sm font-semibold text-gray-500">
        {description}
      </p>
    </div>
  </div>
</a>

<style>
  .play-btn {
    animation:
      opacityAnimation 0.3s ease,
      translateAnimation 0.3s ease-out;
  }
  @keyframes opacityAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }

  @keyframes translateAnimation {
    from {
      transform: translateY(10px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
