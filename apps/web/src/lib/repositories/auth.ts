export const signIn = (body: { email: string; password: string }) => {
  return fetch('http://localhost:5000/api/auth/user/signin', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(body),
  });
};

export const signUp = (body: { email: string; password: string }) => {
  return fetch('http://localhost:5000/api/auth/user/singUp', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(body),
  });
};
