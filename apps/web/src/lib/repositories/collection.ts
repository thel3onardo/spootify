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

export const editCollection = (
  collectionId: string,
  body: {
    name: string;
    description: string;
    coverImage: File;
  },
) => {
  const form = new FormData();
  if (body.name) form.append('name', body.name);
  if (body.description) form.append('description', body.description);
  if (body.coverImage) form.append('coverImage', body.coverImage);

  //TODO: remove hard-coded value
  form.append('authorId', 'c823fe59-1153-4f14-b3ca-83967aaecca5');

  return fetch(`http://localhost:5000/api/collection/${collectionId}`, {
    method: 'PATCH',
    body: form,
  });
};

//TODO: implement other methods
