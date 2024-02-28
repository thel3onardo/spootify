import { fetchUser } from '$lib/repositories/auth';
import { setLoggedIn } from '$lib/stores/user';
import type { LayoutLoad } from '../$types';

export const load: LayoutLoad = async () => {
  //check if user is authenticated
  const res = await fetchUser();

  if (res.status === 200) {
    const user = await res.json();

    setLoggedIn(true);

    return {
      user,
    };
  }

  setLoggedIn(false);
  return {
    user: null,
  };
};
