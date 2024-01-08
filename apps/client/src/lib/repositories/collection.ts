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
    title: string;
    description: string;
    imageFile: File;
  },
) => {
  const form = new FormData();
  if (body.title) form.append('title', body.title);
  if (body.description) form.append('description', body.description);
  if (body.imageFile) form.append('imageFile', body.imageFile);

  return fetch(`http://localhost:5000/api/collection/${collectionId}`, {
    method: 'PATCH',
    body: form,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//TODO: implement other methods
