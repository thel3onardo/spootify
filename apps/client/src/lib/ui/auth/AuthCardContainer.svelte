<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import Button from '$lib/ui/components/button/Button.svelte';
  import SocialAuthButton from '$lib/ui/components/button/SocialAuthButton.svelte';

  const dispatch = createEventDispatcher();
</script>

<div
  class="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-gray-950 to-black"
>
  <div
    class="background relative flex w-full max-w-[550px] flex-col items-center rounded-2xl bg-neutral-950 px-20 py-12 shadow-card transition-shadow delay-700 duration-1000"
    in:fly={{
      y: 75,
      opacity: 0,
      duration: 700,
    }}
    out:fade
  >
    <div class="mb-8 text-center text-gray-50">
      <h1 class="mb-2 text-3xl font-bold">
        <slot name="title" />
      </h1>
      <p class="text-sm text-gray-400">
        <slot name="description" />
      </p>
    </div>

    <div class="my-4 w-full">
      <SocialAuthButton icon="logos:google-icon"
        >Connect with Google</SocialAuthButton
      >
      <SocialAuthButton icon="logos:facebook">
        Connect with Facebook
      </SocialAuthButton>
    </div>

    <div class="w-full">
      <slot name="content" />
    </div>

    <Button
      on:click={() => ''}
      variant="primary"
      rounded="full"
      class="mb-8 mt-12 px-8 py-4"
      block
    >
      <span class="font-bold tracking-widest text-gray-950">
        <slot name="cta-label" />
      </span>
    </Button>

    <slot name="footer" />
  </div>
</div>
