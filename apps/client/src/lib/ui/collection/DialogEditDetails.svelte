<script lang="ts">
  import Dialog from '$lib/ui/components/Dialog.svelte';
  import Button from '$lib/ui/components/button/Button.svelte';
  import InputText from '$lib/ui/components/form/InputText.svelte';
  import InputTextArea from '$lib/ui/components/form/InputTextArea.svelte';
  import CollectionImage from '$lib/ui/collection/CollectionImage.svelte';
  import Icon from '@iconify/svelte';
  import DropdownMenu from '$lib/ui/components/DropdownMenu.svelte';
  import { z } from 'zod';
  import { collectionRepository } from '$lib/repositories';
  import { addToast } from '$lib/ui/components/Toast.svelte';
  import { createEventDispatcher, onMount } from 'svelte';
  import { capitalize } from '$lib/utils';

  const dispatch = createEventDispatcher();
  //TODO: remove z.any()
  const validationSchema = z.object({
    name: z.string().min(2).optional(),
    description: z.string().min(2).optional(),
    fileImage: z.any().optional(),
  });

  let imageFile: FileList | null;
  let inputFile: HTMLInputElement;
  let loading = false;

  let showErrorMessage = false;
  let errorMessage: string | string[];

  let menuOptions = [
    {
      icon: 'ph:image-light',
      label: 'Change photo',
      onClick: () => triggerInputFile(),
    },
    {
      icon: 'ph:trash-simple',
      label: 'Remove photo',
      onClick: () => removePhoto(),
    },
  ];

  export let playlistId: string,
    name: string,
    description: string,
    imageUrl: string,
    visible: boolean,
    playlistOwner: boolean;

  const validate = () => {
    if (showErrorMessage) showErrorMessage = false;

    const valid = validationSchema.safeParse({
      name,
      description,
      fileImage: imageFile && imageFile[0],
    });

    if (valid.success) return saveChanges();

    errorMessage = valid.error.issues.map((issue) => {
      return capitalize(issue.message.replace('String', String(issue.path[0])));
    });
    showErrorMessage = true;
  };

  const saveChanges = async () => {
    try {
      loading = true;

      const body = { name, description, coverImage: imageFile && imageFile[0] };
      const res = await collectionRepository.editCollection(playlistId, body);

      if (res.ok) {
        const data = await res.json();

        dispatch('closeDialog');
        dispatch('newCollectionData', data.data);

        //TODO: use success toast variant
        return addToast({
          data: {
            description: 'Playlist data changed',
            icon: 'ph:check-circle',
            colorClass: 'text-primary',
          },
        });
      }
    } catch (err) {
      //TODO: handle errors
    } finally {
      loading = false;
    }
  };

  const removePhoto = () => {
    //TODO
  };

  const triggerInputFile = () => {
    inputFile.click();
  };
</script>

<Dialog closeIcon bind:visible>
  <svelte:fragment slot="title">Edit details</svelte:fragment>
  <svelte:fragment slot="content">
    {#if showErrorMessage}
      <div
        class="flex w-full items-center gap-x-2 rounded-lg bg-neutral-800 px-4 py-3"
      >
        <Icon
          icon="ph:warning-circle"
          width="1.5rem"
          height="1.5rem"
          class="text-red-400"
        />
        <p class="text-sm font-medium text-neutral-400">
          {errorMessage}
        </p>
      </div>
    {/if}
    <div class="mb-2 mt-4 flex gap-x-4">
      <div class="relative h-[180px] w-[180px]">
        <CollectionImage
          on:click={triggerInputFile}
          imageSrc={imageUrl}
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
              {#each menuOptions as { icon, onClick, label }}
                <button
                  class="flex items-center gap-x-2 p-2 text-neutral-400 hover:bg-neutral-800"
                  on:click={onClick}
                >
                  <Icon {icon} width="1.2rem" height="1.2rem" />
                  <span class="text-sm font-medium text-neutral-400"
                    >{label}</span
                  >
                </button>
              {/each}
            </div>
          </DropdownMenu>
        </div>
      </div>
      <div class="flex grow flex-col gap-y-3">
        <InputText
          bind:value={name}
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
        on:click={validate}
        variant="light"
        rounded="full"
        {loading}
        class="transition hover:scale-105">Save</Button
      >
    </div>
    <p class="mt-4 text-xs font-semibold text-neutral-300">
      By proceeding, you agree to give Spootify access to the image you choose
      to upload. Please make sure you have the right to upload the image.
    </p>
  </svelte:fragment>
</Dialog>

<input
  type="file"
  accept="image/*"
  bind:this={inputFile}
  bind:files={imageFile}
  hidden
/>
