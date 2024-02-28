import { writable } from 'svelte/store';

export let user = writable({
  loggedIn: false,
});

export const setLoggedIn = (newState: boolean) => {
  user.update((user) => {
    return { loggedIn: newState };
  });
};
