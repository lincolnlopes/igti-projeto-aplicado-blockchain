import React from 'react';
import Input from '../Forms/Input';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify({ username, password }));
    const token = await fetch('http://localhost:3001/tokens', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: username, password }),
    })
      .then((response) => response.json())
      .then(console.log);
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          id="user"
          label="Usuário "
          type="text"
          placeholder="Digite o seu e-mail ou núm.celular"
          value={username}
          variant="outlined"
          onChange={({ target }) => setUsername(target.value)}
        />

        <Input
          id="password"
          label="Senha "
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <Input
          id="submit"
          value="Entrar"
          type="button"
          onClick={handleSubmit}
        />
      </form>
    </section>
  );
};
export default LoginForm;
