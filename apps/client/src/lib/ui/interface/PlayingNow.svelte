<script lang="ts">
  import { playingNowMenuVisible } from '$lib/stores/layout';

  import Icon from '@iconify/svelte';
  import CardArtistDetails from './CardArtistDetails.svelte';
  import ImageSkeleton from '$lib/ui/components/ImageSkeleton.svelte';
  import { currentTrack } from '$lib/stores/track';

  let albumName = 'Lowkey tech';
  let coverSrc = $currentTrack?.coverImage;
  let trackName = $currentTrack?.name;
  let author = $currentTrack?.author.name;

  let container: HTMLElement;
  let clientWidth: number, containerWidth: number;

  const toggleMenu = () => {
    $playingNowMenuVisible = false;
  };

  const handleMouseDown = (e: MouseEvent) => {
    const elWidth = window.getComputedStyle(container).width;
    clientWidth = e.clientX;
    containerWidth = parseInt(elWidth, 10);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();

    const widthDiff = e.clientX - clientWidth;
    const newWidth = containerWidth - widthDiff;

    if (newWidth <= 500 && newWidth >= 300) {
      container.style.width = `${newWidth}px`;
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
  };
</script>

<div
  class="relative ml-2 flex w-[400px] flex-col overflow-y-scroll rounded bg-gray-950 px-5 py-4"
  bind:this={container}
>
  <div
    class="absolute left-0 top-0 h-full w-[2px] cursor-w-resize bg-transparent transition hover:bg-white/50"
    on:mousedown={handleMouseDown}
    on:click={(e) => {
      e.preventDefault();
    }}
  />
  <div class="mb-4 flex items-center justify-between">
    <h2 class="font-manrope font-bold">{albumName}</h2>
    <button on:click={toggleMenu} class="rounded-full p-2 hover:bg-gray-900">
      <Icon
        icon="material-symbols:close-rounded"
        width="1.4rem"
        height="1.4rem"
        class="text-white"
      />
    </button>
  </div>

  <div class="flex flex-col">
    <ImageSkeleton
      src={coverSrc}
      alt="Testing stuff"
      class="relative h-[300px] w-full overflow-hidden rounded-lg"
    />
    <div class="flex items-center">
      <div class="my-4">
        <a href="/" class="hover:underline">
          <h2 class="mb-2 font-inter text-2xl font-bold text-white">
            {trackName}
          </h2>
        </a>
        <a href="#" class="hover:underline">
          <span class="font-manrope font-semibold text-gray-500">{author}</span>
        </a>
      </div>
    </div>
  </div>

  <CardArtistDetails artistId={200} />

  <div class="w-full rounded-lg bg-gray-800 p-4">
    <div class="mb-3 flex justify-between font-semibold">
      <h3 class="text-md">Next in queue</h3>
      <a
        href="/queue"
        class="text-sm text-gray-500 hover:text-white hover:underline hover:underline-offset-2"
        >Open queue</a
      >
    </div>
    <p>here comes the music</p>
  </div>
</div>
