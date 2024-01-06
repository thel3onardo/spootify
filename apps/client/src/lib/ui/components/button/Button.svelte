<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  type VariantList = Record<string, string>;
  type VariantKeyProp = keyof typeof variantList;

  type RoundedList = Record<string, string>;
  type RoundedKeyProp = keyof typeof roundedList;

  const dispatch = createEventDispatcher();

  const variantList = {
    light: 'bg-white shadow-lg text-gray-900',
    dark: 'bg-transparent',
    primary: 'bg-primary text-gray-50 hover:scale-105 transition duration-200',
  } satisfies VariantList;

  const roundedList = {
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  } satisfies RoundedList;

  export let variant: VariantKeyProp,
    rounded: RoundedKeyProp,
    block = false;
</script>

<button
  on:click={() => dispatch('click')}
  class="font-inter {variantList[variant]} {roundedList[rounded]} {block
    ? 'w-full'
    : ''} {$$props.class}"
>
  <slot />
</button>
