<script lang="ts">
  import Icon from '@iconify/svelte';

  export let favorite = false;

  const options: Array<{ id: number; icon: string }> = [
    {
      id: 1,
      icon: `${
        favorite ? 'material-symbols:favorite-rounded' : 'ph:heart-bold'
      }`,
    },
    { id: 2, icon: 'material-symbols:volume-up-rounded' },
    { id: 2, icon: 'material-symbols:lyrics' },
    { id: 2, icon: 'material-symbols:info-outline-rounded' },
  ];
</script>

<div class="flex gap-x-4">
  {#each options as option}
    <button
      class="hover:text-primary hover:bg-gray-100/20 rounded-full p-2 transition"
    >
      <Icon icon={option.icon} width="1.35rem" height="1.35rem" />
    </button>
  {/each}
</div>
