<script lang="ts">
  import PlayerbarControls from './PlayerbarControls.svelte';
  import PlayerbarOptions from './PlayerbarOptions.svelte';

  let currentTime = '1:25';
  let trackTime = '3:00';
</script>

<div
  class="flex justify-between items-center gap-x-12 px-4 py-3 backdrop-blur-xl"
>
  <div class="flex items-center group">
    <div class="w-[60px] h-[60px] rounded-2xl overflow-hidden mr-4">
      <img
        src="https://wallpapers-clan.com/wp-content/uploads/2023/01/aesthetic-anime-girl-pfp-9.jpg"
        alt="Music cover's"
      />
    </div>
    <div>
      <h3 class="font-bold text-lg">Billie Bossa Nova</h3>
      <p class="text-sm text-white/70 font-manrope font-medium">
        Billie Eilish
      </p>
    </div>
  </div>

  <div class="flex flex-col items-center justify-center grow">
    <PlayerbarControls />
    <div
      class="flex items-center mt-3 text-xs font-manrope font-medium text-gray-500 w-full max-w-[700px]"
    >
      <span>{currentTime}</span>
      <div
        class="h-[4px] w-full mx-3 bg-gray-500/40 rounded grow relative before:content-[''] before:absolute before:bg-white before:left-0 before:h-full before:w-2/4 before:rounded"
      />
      <span>{trackTime}</span>
    </div>
  </div>

  <PlayerbarOptions />
</div>
