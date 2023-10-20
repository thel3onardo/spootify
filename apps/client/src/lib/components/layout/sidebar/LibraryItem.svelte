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
  class="flex rounded-lg p-2 transition hover:bg-gray-500/10"
>
  <div class="mr-3 h-[50px] w-[50px] overflow-hidden rounded-md">
    <img src={coverUrl} alt={coverAlt} class="object-cover" />
  </div>
  <div class="font-manrope font-semibold">
    <h4 class="text-left text-white">{name}</h4>
    <div class="mt-1 flex items-center">
      {#if pinned}
        <Icon
          icon="tabler:pinned-filled"
          width="1.1rem"
          height="1.1rem"
          class="mr-1 rotate-45 text-primary"
        />
      {/if}
      <span class="text-sm text-gray-500">{description}</span>
    </div>
  </div>
</a>
