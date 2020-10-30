import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';

const LoginCreate = () => {
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
    <Grid container display="flex" justify="space-around" alignItems="center">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="outlined-user"
          label="Usuário"
          variant="outlined"
          style={{ margin: '10px' }}
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <TextField
          id="outlined-password"
          label="Senha"
          variant="outlined"
          style={{ margin: '10px' }}
          value={password}
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button xs={12} onClick={handleSubmit}>
          Entrar
        </Button>
      </form>
    </Grid>
  );
};
export default LoginCreate;
