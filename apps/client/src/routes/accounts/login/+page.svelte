<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import FormInput from '$lib/components/FormInput.svelte';
</script>

<div
  class="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-gray-900 to-black"
>
  <div class="flex flex-col text-white bg-black py-3 px-12 rounded-lg">
    <h1 class="font-bold text-5xl my-8">Log in to Spootify</h1>

    <FormInput label="Email or username" placeholder="Email" name="email" />
    <FormInput
      label="Password"
      placeholder="Password"
      name="password"
      class="mt-6"
      type="password"
      password
    />

    <Button variant="primary" rounded="3xl" class="my-8 px-8 py-3" block>
      <span class="text-gray-900 font-bold text-md">Log in</span>
    </Button>
  </div>
</div>
