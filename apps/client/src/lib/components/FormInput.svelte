<script lang="ts">
  import Icon from '@iconify/svelte';

  let passwordVisible = false;

  const togglePasswordVisible = () => {
    passwordVisible = !passwordVisible;

    type = type === 'text' ? 'password' : 'text';
  };
  const handleInput = (e: Event) => {
    value = (e.target as HTMLInputElement).value;
  };

  export let type = 'text',
    placeholder: string,
    label: string,
    name: string,
    password = false,
    value: string;
</script>

<form class="flex flex-col text-white {$$props.class}">
  <label for={name} class="text-xs font-manrope font-bold mb-2">{label}</label>
  <div class="relative">
    <input
      id={name}
      class="border border-white/40 px-3 py-2.5 rounded w-full bg-gray-950 text-white hover:border-white focus:border-2 focus:border-white outline-none transition"
      {type}
      {placeholder}
      on:input={handleInput}
    />
    {#if password}
      <button
        on:click={togglePasswordVisible}
        on:keydown={togglePasswordVisible}
        class="absolute right-4 top-1/4 cursor-pointer text-gray-500"
      >
        <Icon
          icon={passwordVisible ? 'mdi:eye-off' : 'mdi:eye'}
          width="1.3rem"
          height="1.3rem"
        />
      </button>
    {/if}
  </div>
</form>
