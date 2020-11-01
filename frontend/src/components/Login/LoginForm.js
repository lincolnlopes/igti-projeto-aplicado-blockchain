import React from 'react';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Input from '../Forms/Input';

const LoginForm = () => {
  //const [username, setUsername] = React.useState('');
  //const [password, setPassword] = React.useState('');

  const username = useForm('email');
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);
  /*
  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }
*/
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
      userLogin(username.value, password.value);
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
        {!loading ? (
          <Input
            id="submit"
            value="Entrar"
            type="submit"
            onClick={handleSubmit}
          />
        ) : (
          <Input
            id="submit"
            value="Carregando..."
            type="submit"
            disabled
            onClick={handleSubmit}
          />
        )}
        {error && <p>{error}</p>}
      </form>
    </section>
  );
};
export default LoginForm;
