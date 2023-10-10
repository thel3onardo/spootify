<script lang="ts">
  import Button from '../Button.svelte';

  const loggedIn = false;
</script>

<div
  class="flex items-center justify-between bg-black/40 py-2 px-8 sticky top-0 z-20 w-full"
>
  <div>
    <span>before</span>
    <span>after</span>
  </div>
  <div class="flex">
    <Button href="/test" rounded="md" variant="dark" class="py-3 px-7">
      <span class="text-gray-500 font-semibold">Sign up</span>
    </Button>
    <Button href="/test" rounded="3xl" variant="light" class="py-3 px-7">
      <span class="font-semibold">Log in</span>
    </Button>
  </div>
</div>
