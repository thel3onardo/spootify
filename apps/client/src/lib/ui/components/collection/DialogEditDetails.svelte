<script lang="ts">
  import Dialog from '$lib/ui/components/Dialog.svelte';
  import Button from '$lib/ui/components/button/Button.svelte';
  import InputText from '$lib/ui/components/form/InputText.svelte';
  import InputTextArea from '$lib/ui/components/form/InputTextArea.svelte';
  import CollectionImage from '$lib/ui/components/collection/CollectionImage.svelte';
  import { collectionRepository } from '$lib/repositories';

  let title: string;
  let description: string;
  let imageFile = null;
  //TODO: handle image case

  export let playlistId: string, coverImageUrl: string, visible: boolean;

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
</script>

<Dialog closeIcon bind:visible>
  <svelte:fragment slot="title">Edit details</svelte:fragment>
  <svelte:fragment slot="content">
    <div class="mb-2 mt-4 flex gap-x-4">
      <div class="h-[180px] w-[180px]">
        <CollectionImage src={coverImageUrl} alt="CHANGE_THIS" hasOptions />
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
