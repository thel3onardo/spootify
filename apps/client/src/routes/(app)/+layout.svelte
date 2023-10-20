<script lang="ts">
  import { playingNowMenuVisible } from '$lib/stores/layout';

  import Sidebar from '$lib/components/layout/sidebar/Sidebar.svelte';
  import Playerbar from '$lib/components/layout/Playerbar.svelte';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import PlayingNow from '$lib/components/layout/PlayingNow.svelte';
</script>

<div
  class="grid h-screen grid-rows-[minmax(100px,_1fr)_min-content] gap-y-2 bg-black p-2 text-white"
>
  <div class="grid grid-cols-[min-content_1fr] gap-x-2">
    <Sidebar />
    <div
      class="relative grid h-full grid-cols-[1fr_min-content] grid-rows-1 gap-x-2 overflow-x-hidden rounded-lg"
    >
      <div class="relative overflow-y-scroll">
        <slot />
      </div>

      {#if $playingNowMenuVisible}
        <PlayingNow />
      {/if}
    </div>
  </div>
  <Playerbar />
</div>
