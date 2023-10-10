<script lang="ts">
  import Icon from '@iconify/svelte';

  export let name: string,
    id: number,
    pinned: boolean,
    coverUrl: string,
    coverAlt: string,
    description: string;
</script>

<a
  href="/playlist/{id}"
  class="flex hover:bg-gray-500/10 p-2 rounded-lg transition"
>
  <div class="h-[50px] w-[50px] rounded-md mr-3 overflow-hidden">
    <img src={coverUrl} alt={coverAlt} class="object-cover" />
  </div>
  <div class="font-manrope font-semibold">
    <h4 class="text-white text-left">{name}</h4>
    <div class="flex items-center mt-1">
      {#if pinned}
        <Icon
          icon="tabler:pinned-filled"
          width="1.1rem"
          height="1.1rem"
          class="text-primary rotate-45 mr-1"
        />
      {/if}
      <span class="text-gray-500 text-sm">{description}</span>
    </div>
  </div>
</a>
