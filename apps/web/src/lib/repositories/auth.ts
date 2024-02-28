export const loginWithCredentials = (body: {
  email: string;
  password: string;
}) => {
  return fetch('http://localhost:5000/api/auth/login', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(body),
  });
};

export const registerWithCredentials = (body: {
  email: string;
  password: string;
}) => {
  return fetch('http://localhost:5000/api/auth/register', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(body),
  });
};

export const fetchUser = () => {
  return fetch('http://localhost:5000/api/user', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'GET',
  });
};

export const signOut = () => {
  return fetch('http://localhost:5000/api/auth/sign-out', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'GET',
  });
};
