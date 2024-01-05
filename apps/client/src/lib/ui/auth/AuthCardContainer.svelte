<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "$lib/ui/components/button/Button.svelte";
  import SocialAuthButton from "$lib/ui/components/button/SocialAuthButton.svelte";
  import { fly } from "svelte/transition";

  const dispatch = createEventDispatcher();
</script>

<div
  class="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-gray-950 to-black"
>
  <div
    class="relative flex w-full max-w-[550px] flex-col items-center rounded-2xl bg-neutral-950 px-20 py-12 shadow-card transition-shadow delay-700 duration-1000"
    transition:fly={{ y: 50, opacity: 0, duration: 600 }}
  >
    <div class="mb-8 text-center text-gray-50">
      <div class="mb-2 text-3xl font-bold">
        <slot name="title" />
      </div>
      <div class="text-sm text-gray-400">
        <slot name="description" />
      </div>
    </div>

    <div class="my-4 w-full">
      <SocialAuthButton icon="logos:google-icon"
        >Connect with Google</SocialAuthButton
      >
      <SocialAuthButton icon="logos:facebook">
        Connect with Facebook
      </SocialAuthButton>
    </div>

    <slot name="content" />

    <Button
      on:click={() => ""}
      variant="primary"
      rounded="full"
      class="mb-8 mt-12 px-8 py-4"
      block
    >
      <div class="font-bold tracking-widest text-gray-950">
        <slot name="cta-label" />
      </div>
    </Button>

    <!-- <p class="text-gray-500">
      Does not have an account? <a
        href="/accounts/sign-up"
        class="text-gray-200 hover:underline">Sign up</a
      >
    </p> -->
  </div>
</div>
