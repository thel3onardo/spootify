<script lang="ts">
  import { playingNowMenuVisible } from '$lib/stores/layout';

  import Icon from '@iconify/svelte';
  import CardArtistDetails from './CardArtistDetails.svelte';
  import SkeletonLoader from '../SkeletonLoader.svelte';

  let trackCoverLoaded = false;
  let albumName = 'Lowkey tech';
  let trackCover =
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22ee671f-2c0a-48dd-9c70-4ff5b5092538/dfmm32g-e1749540-d01f-40e0-934c-930c389a57d7.jpg/v1/fill/w_894,h_894,q_70,strp/anime_girl_made_by_nature_by_ratzbyrats_dfmm32g-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzIyZWU2NzFmLTJjMGEtNDhkZC05YzcwLTRmZjViNTA5MjUzOFwvZGZtbTMyZy1lMTc0OTU0MC1kMDFmLTQwZTAtOTM0Yy05MzBjMzg5YTU3ZDcuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4XfuROd9iw67yBpHHHK3otVOaINFTyXznkERdEE1Brg';
  let trackName = 'Keep Going';
  let author = 'Stephan Jolk';
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

  // onMount(() => {
  //   setTimeout(() => {
  //     trackCoverLoaded = true;
  //   }, 500);
  // });
</script>

<div
  class="relative flex w-[350px] flex-col overflow-y-scroll rounded bg-gray-950 px-5 py-4"
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
    <div class="relative w-full overflow-hidden rounded-lg">
      <img
        src={trackCover}
        alt="track cover"
        class="z-10 h-full w-full object-cover"
        on:load={() => (trackCoverLoaded = true)}
      />
      {#if !trackCoverLoaded}
        <SkeletonLoader width="100%" height="100%" class="top-0 z-20" />
      {/if}
    </div>
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
