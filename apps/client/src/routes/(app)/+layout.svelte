<script lang="ts">
  import Sidebar from '$lib/components/layout/sidebar/Sidebar.svelte';
  import Playerbar from '$lib/components/layout/Playerbar.svelte';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import PlayingNow from '$lib/components/layout/PlayingNow.svelte';

  let playingNowMenuVisible = true;

  const togglePlayingNowMenu = () => {
    playingNowMenuVisible = !playingNowMenuVisible;
  };
</script>

<div
  class="h-screen bg-black text-white p-2 grid grid-rows-[minmax(100px,_1fr)_min-content] gap-y-2"
>
  <div class="grid grid-cols-[min-content_1fr] gap-x-2 h-full">
    <Sidebar />
    <div class="grid grid-rows-1 grid-cols-[1fr_min-content] overflow-hidden">
      <div class="overflow-y-scroll relative rounded-lg w-full">
        <Navbar />
        <div class="absolute top-0 h-full w-full">
          <slot />
        </div>
      </div>
      {#if playingNowMenuVisible}
        <PlayingNow />
      {/if}
    </div>
  </div>
  <Playerbar />
</div>
