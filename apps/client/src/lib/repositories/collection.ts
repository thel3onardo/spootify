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

export const getCollectionById = (id: string) => {
  return fetch(`http://localhost:5000/api/collection/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

//TODO: implement other methods
