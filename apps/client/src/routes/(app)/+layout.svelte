<script lang="ts">
  import { playingNowMenuVisible } from '$lib/stores/layout';
  import { currentTrack } from '$lib/stores/track';

  import Sidebar from '$lib/ui/interface/sidebar/Sidebar.svelte';
  import Playerbar from '$lib/ui/interface/playerbar/Playerbar.svelte';
  import PlayingNow from '$lib/ui/interface/PlayingNow.svelte';
</script>

<div
  class="grid h-screen grid-rows-[minmax(100px,_1fr)_min-content] gap-y-2 bg-black p-2 text-white"
>
  <div class="grid grid-cols-[min-content_1fr] gap-x-2">
    <Sidebar />
    <div
      class="relative grid h-full grid-cols-[1fr_min-content] grid-rows-1 overflow-x-hidden"
    >
      <div class="relative overflow-y-scroll rounded-lg">
        <slot />
      </div>

      {#if $playingNowMenuVisible}
        <PlayingNow />
      {/if}
    </div>
  </div>
  {#if $currentTrack}
    <Playerbar />
  {/if}
</div>
