<script lang="ts">
  import AuthCardContainer from '$lib/ui/auth/AuthCardContainer.svelte';
  import Link from '$lib/ui/components/Link.svelte';
  import Checkbox from '$lib/ui/components/form/Checkbox.svelte';
  import InputText from '$lib/ui/components/form/InputText.svelte';

  let user = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    acceptedTerms: false,
  };
</script>

<svelte:head>
  <title>Spootify - Register</title>
</svelte:head>

<AuthCardContainer>
  <svelte:fragment slot="title">Sign up in Spootify</svelte:fragment>

  <svelte:fragment slot="description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur
  </svelte:fragment>

  <div slot="content" class="flex w-full flex-col gap-y-6">
    <InputText
      bind:value={user.name}
      label="Name"
      placeholder="Your name"
      name="name"
      autocomplete="off"
      class="w-full"
      icon="ph:user-light"
    />

    <InputText
      bind:value={user.email}
      label="Email"
      placeholder="Email"
      name="email"
      autocomplete="off"
      class="w-full"
      icon="ph:envelope-light"
    />

    <InputText
      bind:value={user.password}
      label="Password"
      placeholder="Password"
      name="password"
      type="password"
      icon="ph:key"
      password
    />

    <InputText
      bind:value={user.passwordConfirmation}
      label="Confirm password"
      placeholder="Confirm your password"
      name="confirm-password"
      type="password"
      icon="ph:key"
      password
    />

    <Checkbox bind:value={user.acceptedTerms}
      >I accept the terms of service and <Link
        href="?"
        class="font-medium text-neutral-400">privacy policy</Link
      ></Checkbox
    >
  </div>

  <span slot="cta-label">Register</span>

  <p slot="footer" class="text-sm text-gray-500">
    Already have an account? <Link
      href="/accounts/sign-in"
      class="font-medium text-neutral-400">Sign in</Link
    >
  </p>
</AuthCardContainer>
