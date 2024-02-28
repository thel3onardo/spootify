<script lang="ts">
  import InputText from '$lib/ui/components/form/InputText.svelte';
  import Switch from '$lib/ui/components/form/Switch.svelte';
  import Link from '$lib/ui/components/Link.svelte';
  import AuthCardContainer from '$lib/ui/auth/AuthCardContainer.svelte';

  import { loginWithCredentials } from '$lib/repositories/auth';
  import { addToast } from '$lib/ui/components/Toast.svelte';
  import { goto } from '$app/navigation';
  import Icon from '@iconify/svelte';

  let password = '';
  let email = '';
  let rememberUser = false;
  let invalidCredentials = false;

  const credentials = async () => {
    try {
      const res = await loginWithCredentials({ email, password });

      if (res.ok) {
        const data = await res.json();

        if (data.status === 'success') {
          return goto('/');
        }
      }

      if (res.status === 400) {
        what();
        return;
      }

      if (res.status === 404) {
        return (invalidCredentials = true);
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

<svelte:head>
  <title>Spootify - Login</title>
</svelte:head>

<div
  class="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-gray-950 to-black"
>
  <AuthCardContainer on:ctaClick={credentials}>
    <svelte:fragment slot="title">Log in to Spootify</svelte:fragment>

    <svelte:fragment slot="description"
      >Connect to millions of musics, enjoy the best!</svelte:fragment
    >

    <svelte:fragment slot="content">
      {#if invalidCredentials}
        <div
          class="mb-6 mt-2 flex w-full items-center gap-x-2 rounded-lg bg-gradient-to-b from-gray-950 to-[#442929]/40 p-4 text-gray-400"
        >
          <Icon
            icon="ph:warning-circle"
            width="1.5rem"
            height="1.5rem"
            class="text-red-500"
          />
          <p class="text-sm font-medium">Email or password invalid</p>
        </div>
      {/if}

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
        <Switch bind:value={rememberUser}>
          <span class="text-sm">Remember-me</span>
        </Switch>
        <Link href="/accounts/signup" class="text-sm text-gray-400"
          >Forgot my password</Link
        >
      </div>
    </svelte:fragment>

    <svelte:fragment slot="cta-label">Login</svelte:fragment>

    <p slot="footer" class="text text-sm font-semibold text-gray-500">
      Do not have an account?
      <Link href="/accounts/sign-up" class="text-gray-200">Sign up</Link>
    </p>
  </AuthCardContainer>
</div>
