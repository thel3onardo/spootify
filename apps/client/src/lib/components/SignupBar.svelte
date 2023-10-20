<script>
  import Button from './Button.svelte';
</script>

<div
  class="flex w-full items-center justify-between bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-3"
>
  <div class="select-none font-manrope">
    <p class="text-xs font-semibold uppercase tracking-wider">
      preview of spootify
    </p>
    <p class="font-bold">
      Sign up to get unlimited songs and podcasts with occasional ads. No credit
      card needed
    </p>
  </div>
  <Button variant="light" rounded="3xl">
    <span class="font-semibold text-black">Sign up free</span>
  </Button>
</div>
