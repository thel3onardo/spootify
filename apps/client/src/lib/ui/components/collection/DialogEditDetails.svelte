<script lang="ts">
  import Dialog from '$lib/ui/components/Dialog.svelte';
  import Button from '$lib/ui/components/button/Button.svelte';
  import InputText from '$lib/ui/components/form/InputText.svelte';
  import InputTextArea from '$lib/ui/components/form/InputTextArea.svelte';
  import CollectionImage from '$lib/ui/components/collection/CollectionImage.svelte';
  import Icon from '@iconify/svelte';
  import DropdownMenu from '../DropdownMenu.svelte';

  import { collectionRepository } from '$lib/repositories';

  let title: string;
  let description: string;
  //TODO: handle image case
  let imageFile: HTMLInputElement;

  export let playlistId: string,
    coverImageUrl: string,
    visible: boolean,
    playlistOwner: boolean;

  const saveChanges = async () => {
    //TODO: validate fields
    try {
      const res = await collectionRepository.editCollection(playlistId, {
        title,
        description,
        imageFile,
      });
      if (res.ok) {
        const data = await res.json();
        console.log({ data });
      }
    } catch (err) {
      //TODO: handle errors
    }
  };
  const triggerInputFile = () => {
    imageFile.click();
  };
</script>

<Dialog closeIcon bind:visible>
  <svelte:fragment slot="title">Edit details</svelte:fragment>
  <svelte:fragment slot="content">
    <div class="mb-2 mt-4 flex gap-x-4">
      <div class="relative h-[180px] w-[180px]">
        <CollectionImage
          on:click={triggerInputFile}
          imageSrc={coverImageUrl}
          imageAlt="CHANGE_THIS"
          {playlistOwner}
        />
        <div class="absolute right-3 top-3">
          <DropdownMenu variant="dark" placement="bottom-end">
            <button
              slot="trigger"
              class="flex h-8 w-8 cursor-default items-center justify-center rounded-full bg-neutral-900/60 text-neutral-400 transition hover:bg-neutral-900 hover:text-neutral-50"
            >
              <Icon
                icon="solar:menu-dots-bold"
                width="1.3rem"
                height="1.3rem"
              />
            </button>
            <div class="flex w-[150px] flex-col" slot="options">
              <button
                class="flex items-center gap-x-2 p-2 text-neutral-400 hover:bg-neutral-800"
              >
                <Icon icon="ph:image-light" width="1.2rem" height="1.2rem" />
                <span class="text-sm font-medium text-neutral-400"
                  >Change photo</span
                >
              </button>
              <button
                class="flex items-center gap-x-2 p-2 text-neutral-400 hover:bg-neutral-800"
              >
                <Icon icon="ph:trash-simple" width="1.2rem" height="1.2rem" />
                <span class="text-sm font-medium text-neutral-400"
                  >Remove photo</span
                >
              </button>
            </div>
          </DropdownMenu>
        </div>
      </div>
      <div class="flex grow flex-col gap-y-3">
        <InputText
          bind:value={title}
          placeholder="New title"
          type="text"
          name="playlist-title"
        />
        <InputTextArea
          bind:value={description}
          cols={2}
          name="description"
          placeholder="description"
          class="h-full"
        />
      </div>
    </div>
    <div class="flex justify-end">
      <Button
        on:click={saveChanges}
        variant="light"
        rounded="full"
        class="transition hover:scale-105">Save</Button
      >
    </div>
    <p class="mt-4 text-xs font-semibold text-neutral-300">
      By proceeding, you agree to give Spootify access to the image you choose
      to upload. Please make sure you have the right to upload the image.
    </p>
  </svelte:fragment>
</Dialog>

<input type="file" bind:this={imageFile} hidden />
