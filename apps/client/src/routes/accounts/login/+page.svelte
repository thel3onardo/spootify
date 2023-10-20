<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import FormInput from '$lib/components/FormInput.svelte';

  let password = '';
  let credential = '';
</script>

<div
  class="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-gray-900 to-black"
>
  <div
    class="flex flex-col items-center rounded-lg bg-black px-24 py-12 text-white"
  >
    <h1 class="mb-8 text-5xl font-bold">Log in to Spootify</h1>

    <FormInput
      bind:value={credential}
      label="Email or username"
      placeholder="Email"
      name="email"
      autocomplete="on"
      class="w-full"
    />
    <FormInput
      bind:value={password}
      label="Password"
      placeholder="Password"
      name="password"
      class="mt-6 w-full"
      type="password"
      password
    />

    <Button variant="primary" rounded="3xl" class="my-8 px-8 py-3" block>
      <span class="text-md font-bold text-gray-900">Log in</span>
    </Button>

    <a href="/accounts/signup">
      <span class="text-manrope font-xl text-white underline hover:text-primary"
        >Forgot my password</span
      >
    </a>
  </div>
</div>
