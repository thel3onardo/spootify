//TODO: type return

export const fetchTrackById = async (id: number) => {
  return (
    await fetch(`http://localhost:5000/api/track/${id}`, { method: 'get' })
  ).json();
};
