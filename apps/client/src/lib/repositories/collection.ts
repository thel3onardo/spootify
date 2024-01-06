export const createPlaylist = (body: any) => {
  return fetch('http://localhost:5000/api/collection', {
    method: 'post',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
export const createAlbum = () => {};

//TODO: implement other methods
