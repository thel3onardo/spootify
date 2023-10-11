<script lang="ts">
  import Icon from '@iconify/svelte';

  let albumName = 'Lowkey tech';

  const emitToggle = () => {
    console.log('emitToggle triggered');
  };
</script>

<div class="{$$props.class} w-[500px] bg-gray-950 rounded ml-4 p-4">
  <div class="flex items-center justify-between">
    <h2 class="font-manrope font-bold">{albumName}</h2>

    <button on:click={emitToggle} class="p-2 rounded-full hover:bg-gray-900">
      <Icon
        icon="material-symbols:close-rounded"
        width="1.5rem"
        height="1.5rem"
        class="text-white"
      />
    </button>
  </div>
</div>
