<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Icon from '@iconify/svelte';
  import CardArtistDetails from './CardArtistDetails.svelte';

  let albumName = 'Lowkey tech';
  let trackCover =
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22ee671f-2c0a-48dd-9c70-4ff5b5092538/dfmm32g-e1749540-d01f-40e0-934c-930c389a57d7.jpg/v1/fill/w_894,h_894,q_70,strp/anime_girl_made_by_nature_by_ratzbyrats_dfmm32g-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzIyZWU2NzFmLTJjMGEtNDhkZC05YzcwLTRmZjViNTA5MjUzOFwvZGZtbTMyZy1lMTc0OTU0MC1kMDFmLTQwZTAtOTM0Yy05MzBjMzg5YTU3ZDcuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4XfuROd9iw67yBpHHHK3otVOaINFTyXznkERdEE1Brg';
  let trackName = 'Keep Going';
  let author = 'Stephan Jolk';
  let container: HTMLElement;
  let clientWidth: number, containerWidth: number;

  const dispatch = createEventDispatcher();

  const emitClose = () => {
    dispatch('close', true);
  };

  const handleMouseDown = (e: MouseEvent) => {
    clientWidth = e.clientX;
    const elWidth = window.getComputedStyle(container).width;
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
  class="flex flex-col w-[400px] bg-gray-950 rounded ml-4 py-4 px-5 relative overflow-y-scroll"
  bind:this={container}
>
  <div
    class="absolute left-0 top-0 h-full w-[2px] bg-transparent cursor-w-resize hover:bg-white/50 transition"
    on:mousedown={handleMouseDown}
    on:click={(e) => {
      e.preventDefault();
    }}
  />
  <div class="flex items-center justify-between mb-4">
    <h2 class="font-manrope font-bold">{albumName}</h2>
    <button on:click={emitClose} class="p-2 rounded-full hover:bg-gray-900">
      <Icon
        icon="material-symbols:close-rounded"
        width="1.5rem"
        height="1.5rem"
        class="text-white"
      />
    </button>
  </div>

  <div class="flex flex-col">
    <div class="w-full h-[400px] rounded-lg overflow-hidden">
      <img
        src={trackCover}
        alt="track cover"
        class="object-cover h-full w-full"
      />
    </div>
    <div class="flex items-center">
      <div class="my-4">
        <a href="/" class="hover:underline">
          <h2 class="text-white font-inter font-bold text-2xl mb-2">
            {trackName}
          </h2>
        </a>

        <a href="#" class="hover:underline">
          <span class="text-gray-500 font-manrope font-semibold">{author}</span>
        </a>
      </div>
    </div>
  </div>

  <CardArtistDetails artistId={200} />

  <div class="bg-gray-800 w-full p-4 rounded-lg">
    <div class="flex justify-between font-semibold mb-3">
      <h3 class="text-md">Next in queue</h3>
      <a
        href="/queue"
        class="text-gray-500 text-sm hover:text-white hover:underline hover:underline-offset-2"
        >Open queue</a
      >
    </div>
    <p>here comes the music</p>
  </div>
</div>
