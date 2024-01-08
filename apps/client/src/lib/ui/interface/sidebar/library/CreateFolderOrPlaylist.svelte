<script lang="ts">
  import DropdownMenu from '$lib/ui/components/DropdownMenu.svelte';
  import IconButton from '$lib/ui/components/button/IconButton.svelte';
  import Icon from '@iconify/svelte';

  import { collectionRepository } from '$lib/repositories/';
  import { goto } from '$app/navigation';

  const createNewPlaylist = async () => {
    try {
      const body = JSON.stringify({
        name: 'Eita, dog',
        authorId: '9ac7e8bb-de32-4b4c-9607-103c7215e14c',
      });
      const res = await collectionRepository.createPlaylist(body);

      if (res.status === 201) {
        const data = await res.json();

        return goto(`/playlist/${data.data.collectionId}`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const createNewFolder = () => {
    console.log('create2');
  };
  const options = [
    {
      icon: 'ph:music-notes-plus',
      label: 'Create a new playlist',
      onClick: createNewPlaylist,
    },
    {
      icon: 'ph:folder',
      label: 'Create a new playlist folder',
      onClick: createNewFolder,
    },
  ];
</script>

<DropdownMenu variant="light" placement="bottom-start">
  <svelte:fragment slot="trigger">
    <IconButton
      icon="ph:plus-bold"
      tooltipLabel="Create playlist or folder"
      size="1.75rem"
      hoverBg
    />
  </svelte:fragment>
  <ul slot="options" class="font-medium text-neutral-300">
    {#each options as option}
      <li>
        <button
          on:click={option.onClick}
          class="flex w-full items-center gap-x-2 p-3 hover:bg-neutral-700"
        >
          <Icon icon={option.icon} width="1.5rem" height="1.5rem" />
          <span class="text-sm">{option.label}</span>
        </button>
      </li>
    {/each}
  </ul>
</DropdownMenu>
