<script lang="ts">
  import PlayerBar from './Playerbar.svelte';
  import Sidebar from './Sidebar.svelte';
</script>

<div class="min-h-screen bg-black text-white grid grid-rows-[1fr_min-content]">
  <div class="grid grid-cols-[min-content_1fr] border border-red-500">
    <Sidebar />
    <p>HERE GOES SLOT</p>
  </div>
  <PlayerBar />
</div>
