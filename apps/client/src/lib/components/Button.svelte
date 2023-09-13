<script lang="ts">
  type VariantList = Record<string, string>;
  type VariantKeyProp = keyof typeof variantList;

  type RoundedList = Record<string, string>;
  type RoundedKeyProp = keyof typeof roundedList;

  const variantList = {
    light: 'bg-white px-8 py-3 shadow-lg',
    dark: 'bg-transparent shadow-lg',
  } satisfies VariantList;

  const roundedList = {
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '3xl': 'rounded-3xl',
  } satisfies RoundedList;

  export let variant: VariantKeyProp, rounded: RoundedKeyProp;
</script>

<button class="{variantList[variant]} {roundedList[rounded]}">
  <slot />
</button>
