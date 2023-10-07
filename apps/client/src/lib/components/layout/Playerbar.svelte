<script lang="ts">
  import PlayerbarControls from './PlayerbarControls.svelte';
  import PlayerbarActions from './PlayerbarActions.svelte';
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
  <PlayerbarControls />
  <PlayerbarActions />
</div>
