import { collectionRepository } from '$lib/repositories/index.js';

export interface IPlaylist {
  name: string;
  coverUrl: string;
  description: string;
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const res = await collectionRepository.getCollectionById(params.id);
  const data = await res.json();

  //TODO: improve this, data.data seems bad
  return {
    ...data.data,
    playlistOwner: true,
    coverImage:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c27dc0a4-6276-4036-968e-51b70613de6d/dfbouue-a609b605-d553-4450-b56e-9cd707317231.jpg/v1/fill/w_860,h_929,q_70,strp/anime_girl_pfp_2_by_kenkanekiart_dfbouue-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0OCIsInBhdGgiOiJcL2ZcL2MyN2RjMGE0LTYyNzYtNDAzNi05NjhlLTUxYjcwNjEzZGU2ZFwvZGZib3V1ZS1hNjA5YjYwNS1kNTUzLTQ0NTAtYjU2ZS05Y2Q3MDczMTcyMzEuanBnIiwid2lkdGgiOiI8PTk3MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MPNvuexSn40F9ElOOdn590qvRhSQOZnNodPlc-J62Yc',
  };
}
