<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte';

  type SizeList = Record<string, string>;
  type SizeProp = keyof typeof sizeList;

  const sizeList = {
    normal: '1rem',
    lg: '2rem',
  } satisfies SizeList;

  const dispatch = createEventDispatcher();
  const emitSave = () => {
    dispatch('save');
  };

  export let size: SizeProp;
</script>

<button on:click={emitSave}>
  <Icon
    icon="ph:heart-bold"
    width={sizeList[size]}
    height={sizeList[size]}
    class="hover:text-white text-gray-500 transition"
  />
</button>
