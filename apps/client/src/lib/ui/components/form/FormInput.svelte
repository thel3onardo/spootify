<script lang="ts">
  import Icon from '@iconify/svelte';

  type AutoComplete = 'on' | 'off';

  let passwordVisible = false;

  const togglePasswordVisible = () => {
    passwordVisible = !passwordVisible;

    //TODO: there's a way to improve this?
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
    value: string,
    autocomplete: AutoComplete = 'off';
</script>

<form class="flex flex-col text-white {$$props.class}">
  <label for={name} class="font-manrope mb-2 text-xs font-bold">{label}</label>
  <div class="relative">
    <input
      id={name}
      class="focus:border-primary w-full rounded border border-white/40 bg-gray-950 px-3 py-2.5 text-white outline-none transition hover:border-white"
      {type}
      {placeholder}
      {autocomplete}
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
