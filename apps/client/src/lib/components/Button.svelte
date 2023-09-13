<script lang="ts">
  type VariantList = Record<string, string>;
  type VariantKeyProp = keyof typeof variantList;

  type RoundedList = Record<string, string>;
  type RoundedKeyProp = keyof typeof roundedList;

  const variantList = {
    light: 'bg-white shadow-lg',
    dark: 'bg-transparent shadow-lg',
    primary: 'bg-primary shadow-lg hover:shadow-primary/30 transition',
  } satisfies VariantList;

  const roundedList = {
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '3xl': 'rounded-3xl',
  } satisfies RoundedList;

  export let variant: VariantKeyProp,
    rounded: RoundedKeyProp,
    block = false;
</script>

<button
  class="{variantList[variant]} {roundedList[rounded]} {block
    ? 'w-full'
    : ''} {$$props.class}"
>
  <slot />
</button>
