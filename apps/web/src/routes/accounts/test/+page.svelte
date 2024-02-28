<script lang="ts">
  const submit = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/user/signup', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify({
          email: 'leo2003@leo.com',
          password: '123',
          name: 'leoanrdo',
          birthDate: '2024-01-10T00:00:00',
        }),
      });

      console.log({ res });
    } catch (err) {
      console.error(err);
    }
  };
  const login = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/user/signin', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        method: 'post',
        body: JSON.stringify({
          email: 'leo2003@leo.com',
          password: '123',
        }),
      });
      const headers = res.headers.get('authorization');
      console.log(headers);
      const resJson = await res.json();

      console.log({ resJson });
    } catch (err) {
      console.error(err);
    }
  };
</script>

<form method="post">
  <input type="text" value="leo@leo.com" />Email
  <input type="text" value="1234" />Passowrd
  <button type="submit">submit</button>
  <button class="rounded-lg bg-red-500 p-2 text-black">LOgin</button>
</form>
