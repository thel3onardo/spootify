export const secondsToMinutes = (seconds: number) => {
  const totalMinutes = Math.floor(seconds / 60);
  const secondsRemaining = Math.floor(seconds % 60);
  const minutes = totalMinutes % 60;

  return `${minutes}:${String(secondsRemaining).padStart(2, '0')}`;
};
