import React from 'react';
import { TOKEN_POST, USER_GET } from '../../api';
import useForm from '../../hooks/useForm';
import Input from '../Forms/Input';

const LoginForm = () => {
  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }
  //const [username, setUsername] = React.useState('');
  //const [password, setPassword] = React.useState('');

  const username = useForm('email');
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
      const { url, options } = TOKEN_POST({
        email: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
      //console.log(json);
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
