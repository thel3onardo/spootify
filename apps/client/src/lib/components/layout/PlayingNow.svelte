<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte';

  let albumName = 'Lowkey tech';
  let trackCover =
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22ee671f-2c0a-48dd-9c70-4ff5b5092538/dfmm32g-e1749540-d01f-40e0-934c-930c389a57d7.jpg/v1/fill/w_894,h_894,q_70,strp/anime_girl_made_by_nature_by_ratzbyrats_dfmm32g-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzIyZWU2NzFmLTJjMGEtNDhkZC05YzcwLTRmZjViNTA5MjUzOFwvZGZtbTMyZy1lMTc0OTU0MC1kMDFmLTQwZTAtOTM0Yy05MzBjMzg5YTU3ZDcuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4XfuROd9iw67yBpHHHK3otVOaINFTyXznkERdEE1Brg';
  let trackName = 'Keep Going';
  let author = 'Stephan Jolk';

  const dispatch = createEventDispatcher();

  const emitClose = () => {
    dispatch('close', true);
  };
</script>

<div
  class="{$$props.class} flex flex-col w-[550px] bg-gray-950 rounded ml-4 py-4 px-5"
>
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
      <img src={trackCover} alt="#" class="object-cover h-full" />
    </div>
    <div class="flex items-center">
      <div class="my-4">
        <a href="#" class="hover:underline">
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

  <div
    class="h-[250px] w-full relative rounded-lg overflow-hidden mb-6 hover:translate"
  >
    <div class="absolute z-10 w-full h-full">
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9afd00a5-aedc-4738-8bad-aedbc4347035/dfm6wt2-e40f783b-640c-41b0-96f4-8c35e72609e3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhZmQwMGE1LWFlZGMtNDczOC04YmFkLWFlZGJjNDM0NzAzNVwvZGZtNnd0Mi1lNDBmNzgzYi02NDBjLTQxYjAtOTZmNC04YzM1ZTcyNjA5ZTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YoOJs-zgNq-HrVys8crtOVQPqkL40L0C-87TU5TBLMk"
        alt="#"
        class="object-cover h-full w-full"
      />
    </div>
    <div
      class="bg-black/80 p-4 font-manrope flex flex-col justify-between w-full h-full relative z-20"
    >
      <div class="flex items-center">
        <Icon
          icon="mdi:check-decagram"
          width="1.3rem"
          height="1.3rem"
          class=" text-primary"
        />
        <span class="text-xs ml-1.5 font-semibold">Verified artist</span>
      </div>
      <div class="font-semibold text-sm">
        <p class="mb-2">1,2000 monthly listeners</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat</p>
      </div>
    </div>
  </div>

  <div class="bg-gray-800 w-full p-4 rounded-lg">
    <div class="flex justify-between font-semibold mb-3">
      <h3 class="text-md">Next in queue</h3>
      <a
        href="/queue"
        class="text-gray-500 text-sm hover:underline hover:underline-offset-2"
        >Open queue</a
      >
    </div>
    <p>here comes the music</p>
  </div>
</div>
