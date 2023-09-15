<script lang="ts">
  import SignupBar from '../SignupBar.svelte';
  import Playerbar from './Playerbar.svelte';
  import Sidebar from './Sidebar.svelte';
</script>

<div
  class="h-screen bg-black text-white p-2 grid grid-rows-[minmax(100px,_1fr)_min-content] gap-y-2"
>
  <div class="grid grid-cols-[min-content_1fr] gap-x-2 h-full">
    <Sidebar />
    <div class="overflow-y-scroll">
      <slot />
    </div>
  </div>
  <Playerbar />
</div>
