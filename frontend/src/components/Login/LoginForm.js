import React from 'react';
import useForm from '../../hooks/useForm';
import Input from '../Forms/Input';

const LoginForm = () => {
  //const [username, setUsername] = React.useState('');
  //const [password, setPassword] = React.useState('');

  const username = useForm();
  const password = useForm();

  // https://pt-br.reactjs.org/warnings/unknown-prop.html
  // removo props antes de repassa-las
  const usernameProps = Object.assign({}, username);
  const passwordProps = Object.assign({}, password);
  delete passwordProps.setValue;
  delete usernameProps.setValue;
  delete passwordProps.validate;
  delete usernameProps.validate;

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const token = await fetch('http://localhost:3001/tokens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: username.value,
          password: password.value,
        }),
      })
        .then((response) => response.json())
        .then(console.log);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          id="user"
          label="Usuário "
          type="text"
          name="username"
          placeholder="Digite o seu e-mail ou núm.celular"
          variant="outlined"
          {...usernameProps}
        />

        <Input
          id="password"
          label="Senha "
          type="password"
          {...passwordProps}
        />

        <Input
          id="submit"
          value="Entrar"
          type="submit"
          onClick={handleSubmit}
        />
      </form>
    </section>
  );
};
export default LoginForm;
