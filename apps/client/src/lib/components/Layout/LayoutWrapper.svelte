<script lang="ts">
  import SignupBar from '../SignupBar.svelte';
  import PlayerBar from './Playerbar.svelte';
  import Sidebar from './Sidebar.svelte';
</script>

<div
  class="min-h-screen bg-black text-white p-2 grid grid-rows-[1fr_min-content] gap-y-2"
>
  <div class="grid grid-cols-[min-content_1fr] gap-x-2">
    <Sidebar />
    <slot />
  </div>
  <SignupBar />
</div>
