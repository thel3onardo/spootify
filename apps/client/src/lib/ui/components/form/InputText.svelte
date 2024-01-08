<script lang="ts">
  import Icon from '@iconify/svelte';

  type AutoComplete = 'on' | 'off';
  type InputMode = 'text' | 'numeric';

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
    label: string | null = null,
    name: string,
    password = false,
    value: string,
    autocomplete: AutoComplete = 'off',
    inputmode: InputMode = 'text',
    icon: string | null = null;
</script>

<form class="flex flex-col text-gray-400 {$$props.class}">
  {#if label}
    <label for={name} class="mb-2 font-inter text-xs font-semibold"
      >{label}</label
    >
  {/if}
  <div class="relative">
    <input
      id={name}
      class={`${
        icon ? 'pl-12 pr-4' : 'px-4'
      } w-full rounded-lg border border-gray-900 bg-gray-950 py-3 text-sm font-medium text-neutral-400 outline-none transition placeholder:text-gray-500 hover:border-gray-700 focus:border-primary`}
      {type}
      {placeholder}
      {autocomplete}
      {inputmode}
      spellcheck="false"
      on:input={handleInput}
    />
    {#if icon}
      <Icon
        {icon}
        width="1.25rem"
        height="1.25rem"
        class="text-gray-[#6d6d6d] absolute left-4 top-3"
      />
    {/if}
    {#if password}
      <button
        on:click={togglePasswordVisible}
        on:keydown={togglePasswordVisible}
        class="absolute right-4 top-1/4 cursor-pointer text-[#6d6d6d] hover:text-[#b0b0b0]"
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
