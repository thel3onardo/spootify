<script lang="ts">
  import Dialog from '$lib/ui/components/Dialog.svelte';
  import Button from '$lib/ui/components/button/Button.svelte';
  import InputText from '$lib/ui/components/form/InputText.svelte';
  import InputTextArea from '$lib/ui/components/form/InputTextArea.svelte';
  import CollectionImage from '$lib/ui/components/collection/CollectionImage.svelte';

  let title: string;
  let description: string;
  //TODO: handle image case

  const toggleVisible = () => {
    visible = !visible;
  };

  const saveChanges = () => {
    //TODO:: save changes
  };

  export let playlistId: string, coverImageUrl: string, visible: boolean;
</script>

{#if visible}
  <Dialog closeIcon on:close={toggleVisible}>
    <svelte:fragment slot="title">Edit details</svelte:fragment>
    <svelte:fragment slot="content">
      <div class="mb-1 mt-4 flex gap-x-4">
        <div class="w-[200px]">
          <CollectionImage
            class="h-[200px]"
            src={coverImageUrl}
            alt="CHANGE_THIS"
          />
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
            rows={6}
            cols={2}
            name="description"
            placeholder="description"
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
      <p class="mt-3 text-xs font-semibold text-neutral-300">
        By proceeding, you agree to give Spootify access to the image you choose
        to upload. Please make sure you have the right to upload the image.
      </p>
    </svelte:fragment>
  </Dialog>
{/if}
