<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  class={`${$$props.class} text-manrope text-sm hover:text-primary hover:underline`}
>
  <slot />
</a>
