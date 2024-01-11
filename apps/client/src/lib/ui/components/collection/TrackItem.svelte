<script lang="ts">
  import { secondsToMinutes } from '$lib/utils';

  const formatDate = (date: string) => {
    //date as ISO 8601
    const dateFormat = new Date(date).toString().split(' ');
    const day = dateFormat[1];
    const month = dateFormat[2];
    const year = dateFormat[3];

    return `${day} ${month}, ${year}`;
  };

  export let name: string,
    id: number,
    coverImageUrl: string,
    addedAt: string,
    author: { name: string; id: string },
    duration: number;
</script>

<button on:click={playTrack(id)} class="w-full">
  <div
    class="grid h-[60px] grid-cols-[16px_6fr_4fr_3fr_1fr] items-center gap-4 rounded-lg px-4 text-start font-inter text-sm text-neutral-400 hover:bg-neutral-800"
  >
    <div>
      <span>1</span>
    </div>
    <div class="flex items-center">
      <div class="mr-4 h-[45px] w-[45px] overflow-hidden rounded-lg">
        <img src={coverImageUrl} class="h-full object-cover" alt="#" />
      </div>
      <div class="text-start text-sm">
        <h4 class="mb-0 font-medium text-neutral-50">{name}</h4>
        <span>
          <a href="/" class="hover:underline">{author.name}</a>
        </span>
      </div>
    </div>
    <div>
      <span>Starboy</span>
    </div>
    <div>
      <span>{formatDate(addedAt)}</span>
      <!-- <span>Aug 7, 2023</span> -->
    </div>
    <div>
      <span>{secondsToMinutes(duration)}</span>
    </div>
  </div>
</button>
