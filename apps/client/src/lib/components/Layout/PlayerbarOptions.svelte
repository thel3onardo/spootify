<script lang="ts">
  const options: Array<{ id: number; icon: string }> = [
    { id: 0, icon: 'heart' },
  ];
</script>

<div class="flex">
  {#each options as option}
    <div>{option.id}</div>
  {/each}
</div>
