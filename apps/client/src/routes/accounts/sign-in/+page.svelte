<script lang="ts">
  import Button from "$lib/ui/components/button/Button.svelte";
  import SocialAuthButton from "$lib/ui/components/button/SocialAuthButton.svelte";
  import Checkbox from "$lib/ui/components/form/Checkbox.svelte";
  import InputText from "$lib/ui/components/form/InputText.svelte";
  import { fly } from "svelte/transition";
  import { signIn } from "$lib/repositories/auth";
  import { addToast } from "$lib/ui/components/Toast.svelte";
  import { goto } from "$app/navigation";

  let password = "";
  let email = "";
  let rememberUser = false;

  const login = async () => {
    try {
      const res = await signIn({ email, password });
      if (res.ok) {
        const data = await res.json();

        if (data.status === "success") {
          return goto("/");
        }
      }

      if (res.status === 400) {
        return console.log("bad request");
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  const what = () => {
    addToast({
      data: {
        description: "An error happened. Try again.",
        icon: "heroicons:exclamation-triangle",
        colorClass: "text-red-500",
      },
    });
  };
</script>

<div
  class="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-gray-950 to-black"
>
  <div
    class="relative flex w-full max-w-[550px] flex-col items-center rounded-2xl bg-neutral-950 px-20 py-12 shadow-card transition-shadow delay-700 duration-1000"
    transition:fly={{ y: 50, opacity: 0, duration: 600 }}
  >
    <div class="mb-8 text-center text-gray-50">
      <h1 class="mb-2 text-3xl font-bold">Log in to Spootify</h1>
      <p class="text-sm text-gray-400">
        Connect to millions of musics, enjoy the best!
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

    <InputText
      bind:value={email}
      label="Email or username"
      placeholder="Email"
      name="email"
      autocomplete="off"
      class="w-full"
      icon="ph:envelope-light"
    />

    <InputText
      bind:value={password}
      label="Password"
      placeholder="Password"
      name="password"
      class="mt-6 w-full"
      type="password"
      icon="ph:key"
      password
    />

    <div class="mt-6 flex w-full items-center justify-between">
      <Checkbox label="Remember-me" bind:value={rememberUser} />
      <a
        href="/accounts/signup"
        class="text-manrope text-sm text-gray-500 hover:text-primary hover:underline"
        >Esqueci minha senha</a
      >
    </div>

    <Button
      on:click={login}
      variant="primary"
      rounded="full"
      class="mb-8 mt-12 px-8 py-4"
      block
    >
      <span class="font-bold tracking-widest text-gray-950">Login</span>
    </Button>

    <p class="text-gray-500">
      Does not have an account? <a
        href="/accounts/sign-up"
        class="text-gray-200 hover:underline">Sign up</a
      >
    </p>
  </div>
</div>
