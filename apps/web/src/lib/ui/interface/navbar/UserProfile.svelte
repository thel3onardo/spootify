<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import { NAVBAR_ICONS_SIZE } from '$lib/constants';
  import { signOut } from '$lib/repositories/auth';
  import DropdownMenu from '$lib/ui/components/DropdownMenu.svelte';
  import IconButton from '$lib/ui/components/button/IconButton.svelte';

  const signOutUser = async () => {
    try {
      const res = await signOut();

      if (res.status === 204) {
        await invalidateAll();

        return;
      }
    } catch (err) {
      console.error(err);
    }
  };

  let profileMenuOptions = [
    { id: 1, label: 'Account', clickHandler: () => '' },
    { id: 2, label: 'Profile', clickHandler: () => '' },
    { id: 3, label: 'Settings', clickHandler: () => '' },
    { id: 4, label: 'Logout', clickHandler: signOutUser },
  ];
</script>

<DropdownMenu
  placement="bottom-start"
  variant="light"
  class="min-w-[150px] rounded bg-gray-800 p-1 text-white"
>
  <IconButton
    icon="material-symbols:person-2-outline"
    iconSize={NAVBAR_ICONS_SIZE.OTHER}
    tooltipLabel="Leonardo"
    class="rounded-full bg-gray-950/70 p-1.5 text-white/80 hover:text-white"
    slot="trigger"
  />

  <ul slot="options" class="font-manrope text-sm font-medium">
    {#each profileMenuOptions as { label, id, clickHandler }, index}
      <li
        class="p-3 font-semibold hover:bg-gray-500/10 {index ===
        profileMenuOptions.length - 1
          ? 'border-t border-gray-500/30'
          : ''}"
      >
        <button on:click={clickHandler}>
          {label}
        </button>
      </li>
    {/each}
  </ul>
</DropdownMenu>
