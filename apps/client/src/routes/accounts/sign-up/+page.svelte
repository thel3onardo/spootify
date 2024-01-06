<script lang="ts">
  import AuthCardContainer from '$lib/ui/auth/AuthCardContainer.svelte';
  import Link from '$lib/ui/components/Link.svelte';
  import Checkbox from '$lib/ui/components/form/Checkbox.svelte';
  import InputText from '$lib/ui/components/form/InputText.svelte';
  import RadioGroup from '$lib/ui/components/form/RadioGroup.svelte';

  let user = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };
</script>

<AuthCardContainer>
  <h1 slot="title">Sign up in Spootify</h1>

  <p slot="description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur
  </p>

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

    <Checkbox
      >Aceito os termos de servico e <Link href="?" class="text-gray-300"
        >politica de privacidade</Link
      ></Checkbox
    >
  </div>

  <span slot="cta-label">Register</span>
</AuthCardContainer>
