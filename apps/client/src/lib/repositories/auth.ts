export const signIn = (body: { email: string; password: string }) => {
  return fetch("http://localhost:5000/api/auth/user/signin", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
};
