<script lang="ts">
  import Icon from '@iconify/svelte';
  import Button from '../Button.svelte';

  const loggedIn = true;
</script>

<div
  class="flex items-center justify-between bg-black/40 py-2 px-6 sticky top-0 z-20 w-full"
>
  <div class="flex gap-x-2 text-white">
    <!-- TODO: implement functionality to those buttons below -->
    <button class="bg-black p-2 rounded-full">
      <Icon
        icon="material-symbols:arrow-back-ios-new-rounded"
        width="1rem"
        height="1rem"
      />
    </button>
    <button class="bg-black p-2 rounded-full">
      <Icon
        icon="material-symbols:arrow-forward-ios-rounded"
        width="1rem"
        height="1rem"
      />
    </button>
  </div>
  {#if loggedIn}
    <div class="flex">
      <Button href="/register" rounded="md" variant="dark" class="py-3 px-7">
        <span class="text-gray-500 font-semibold">Sign up</span>
      </Button>
      <Button href="/login" rounded="3xl" variant="light" class="py-3 px-7">
        <span class="font-semibold">Log in</span>
      </Button>
    </div>
  {/if}
</div>
