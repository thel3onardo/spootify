import { fetchUser } from '$lib/repositories/auth';
import { setLoggedIn } from '$lib/stores/user';
import type { LayoutLoad } from './$types';

export const ssr = false;
export const prerender = false;
export const csr = true;

// export const load: LayoutLoad = async () => {
//   console.log('root layout exec');
//   //check if user is authenticated
//   const res = await fetchUser();

//   if (res.status === 200) {
//     const user = await res.json();

//     setLoggedIn(true);

//     return {
//       user,
//     };
//   }

//   return {
//     user: null,
//   };
// };
