<script lang="ts">
  import Icon from '@iconify/svelte';

  const menuOptions: Array<{ id: number; label: string; icon: string }> = [
    { id: 1, label: 'Home', icon: 'material-symbols:home-rounded' },
    { id: 2, label: 'Explore', icon: 'ph:magnifying-glass-fill' },
  ];
</script>

<div class="flex flex-col gap-y-4 items-center px-2 text-white w-[300px]">
  <div class="bg-gray-800 rounded-lg w-full mt-3">
    <ul>
      {#each menuOptions as { icon, label }}
        <li
          class="flex items-center gap-x-4 m-2 px-4 py-2 rounded-lg hover:bg-gray-100/5"
        >
          <Icon {icon} width="1.5rem" height="1.5rem" />
          <span class="text-lg font-medium">{label}</span>
        </li>
      {/each}
    </ul>
  </div>
</div>
