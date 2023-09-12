<script lang="ts">
  import PlayerBar from './Playerbar.svelte';
</script>

<div
  class="min-h-screen bg-gray-900 text-white grid grid-rows-[1fr_min-content]"
>
  <div class="grid grid-cols-[min-content_1fr] border border-red-500">
    <div class="px-12 py-3">
      <p>HERE GOES SIDEBAR</p>
    </div>
    <p>HERE GOES SLOT</p>
  </div>
  <PlayerBar />
</div>
