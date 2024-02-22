<script lang="ts">
  import Icon from '@iconify/svelte';

  const coverImage =
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9afd00a5-aedc-4738-8bad-aedbc4347035/dfm6wt2-e40f783b-640c-41b0-96f4-8c35e72609e3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhZmQwMGE1LWFlZGMtNDczOC04YmFkLWFlZGJjNDM0NzAzNVwvZGZtNnd0Mi1lNDBmNzgzYi02NDBjLTQxYjAtOTZmNC04YzM1ZTcyNjA5ZTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YoOJs-zgNq-HrVys8crtOVQPqkL40L0C-87TU5TBLMk';

  export let artistId: number;
</script>

<a href="/artist/{artistId}">
  <div
    class="artist-card relative mb-6 h-[250px] w-full overflow-hidden rounded-lg bg-cover transition duration-500 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black/70"
    style="background-image: url('{coverImage}')"
  >
    <div
      class="font-manrope relative z-20 flex h-full w-full flex-col justify-between p-4"
    >
      <div class="flex items-center">
        <Icon
          icon="mdi:check-decagram"
          width="1.3rem"
          height="1.3rem"
          class=" text-primary"
        />
        <span class="ml-1.5 text-xs font-semibold">Verified artist</span>
      </div>
      <div class="text-sm font-semibold">
        <p class="mb-2">1,2000 monthly listeners</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat</p>
      </div>
    </div>
  </div>
</a>

<style>
  .artist-card:hover {
    transform: scale(1.02);
  }
</style>
