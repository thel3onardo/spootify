<script lang="ts">
  export let cols: number,
    rows: number,
    label: string | null = null,
    name: string,
    placeholder: string;
</script>

<form>
  {#if label}
    <label for={name}>{label}</label>
  {/if}
  <textarea
    {cols}
    {rows}
    {name}
    {placeholder}
    spellcheck="false"
    class="w-full resize-none rounded-lg border border-gray-900 bg-gray-950 px-4 py-3 text-sm font-medium text-neutral-400 outline-none transition-colors placeholder:capitalize placeholder:text-gray-500 hover:border-gray-700 focus:border-primary {$$props.class}"
  ></textarea>
</form>
