<script lang="ts">
  import InputText from '$lib/ui/components/form/InputText.svelte';
  import Switch from '$lib/ui/components/form/Switch.svelte';
  import Link from '$lib/ui/components/Link.svelte';
  import AuthCardContainer from '$lib/ui/auth/AuthCardContainer.svelte';

  import { signIn } from '$lib/repositories/auth';
  import { addToast } from '$lib/ui/components/Toast.svelte';
  import { goto } from '$app/navigation';

  let password = '';
  let email = '';
  let rememberUser = false;

  const login = async () => {
    try {
      const res = await signIn({ email, password });

      if (res.ok) {
        const data = await res.json();

        if (data.status === 'success') {
          return goto('/');
        }
      }

      if (res.status === 400) {
        return console.log('bad request');
      }
      //TODO: remove any
    } catch (err: any) {
      console.error(err);
    }
  };
  const what = () => {
    addToast({
      data: {
        description: 'An error happened. Try again.',
        icon: 'heroicons:exclamation-triangle',
        colorClass: 'text-red-500',
      },
    });
  };
</script>

<div
  class="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-gray-950 to-black"
>
  <AuthCardContainer on:ctaClick={login}>
    <svelte:fragment slot="title">Log in to Spootify</svelte:fragment>
    <svelte:fragment slot="description"
      >Connect to millions of musics, enjoy the best!</svelte:fragment
    >

    <svelte:fragment slot="content">
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

      <div class="mt-6 flex w-full items-center justify-between font-medium">
        <Switch bind:value={rememberUser}>Remember-me</Switch>
        <Link href="/accounts/signup" class="text-gray-400"
          >Forgot my password</Link
        >
      </div>
    </svelte:fragment>

    <svelte:fragment slot="cta-label">Login</svelte:fragment>

    <p slot="footer" class="text-sm text-gray-500">
      Does not have an account?
      <Link href="/accounts/sign-up" class="font-medium text-gray-200"
        >Sign up</Link
      >
    </p>
  </AuthCardContainer>
</div>
