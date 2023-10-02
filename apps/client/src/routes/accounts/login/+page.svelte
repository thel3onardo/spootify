<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import FormInput from '$lib/components/FormInput.svelte';

  let password = '';
  let credential = '';
</script>

<div
  class="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-gray-900 to-black"
>
  <div
    class="flex flex-col items-center text-white bg-black py-12 px-24 rounded-lg"
  >
    <h1 class="font-bold text-5xl mb-8">Log in to Spootify</h1>

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
      <span class="text-gray-900 font-bold text-md">Log in</span>
    </Button>

    <a href="/accounts/signup">
      <span class="text-manrope text-white font-xl underline hover:text-primary"
        >Forgot my password</span
      >
    </a>
  </div>
</div>
