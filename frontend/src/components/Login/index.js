import { Button, Container, Grid, TextField } from '@material-ui/core';
import React from 'react';
import Logo from '../../assets/blockchain-vote.svg';

const Login = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={6} sm={6}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              display: 'grid',
              maxWidth: '-webkit-fill-available',
            }}
          />
        </Grid>
        <Grid item direction="row" xs={6} sm={6}>
          <form
            noValidate
            autoComplete="off"
            style={{ display: 'grid', margin: '10px' }}
          >
            <TextField
              id="outlined-basic"
              label="Usuário"
              variant="outlined"
              style={{ margin: '10px' }}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              style={{ margin: '10px' }}
            />
            <Button
              xs={12}
              onClick={() => {
                alert('clicado');
              }}
            >
              Entrar
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
