import React, { useState } from 'react';
import { USERS_STORE } from '../../api';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Input from '../Forms/Input';

const LoginCreate = () => {
  const name = useForm();
  const user = useForm('email');
  const password = useForm('password');
  const enrollment = useForm();
  const quota = useForm();

  const [loading, setLoading] = useState(false);
  const token = window.localStorage.getItem('token');

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    const { url, options } = USERS_STORE(token, {
      fullname: name.value,
      email: user.value,
      password: password.value,
      enrollment: enrollment.value,
      quota: quota.value,
    });

    const response = await fetch(url, options);
    if (response.ok) userLogin(user.value, password.value);
    setLoading(false);
  }
  return (
    <section>
      <h1 className="title">Novo Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Nome completo"
          type="text"
          name="name"
          placeholder="Nome e sobrenome"
          variant="outlined"
          {...name}
        />
        <Input
          id="user"
          label="Usuário "
          type="text"
          name="username"
          placeholder="Digite o seu e-mail ou núm.celular"
          variant="outlined"
          {...user}
        />
        <Input
          id="password"
          label="Senha "
          type="text"
          name="password"
          variant="outlined"
          {...password}
        />
        <Input
          id="enrollment"
          label="Matrícula "
          type="text"
          name="enrollment"
          variant="outlined"
          {...enrollment}
        />
        <Input
          id="quota"
          label="Cota/Peso "
          type="number"
          name="enrollment"
          variant="outlined"
          {...quota}
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
      </form>
    </section>
  );
};
export default LoginCreate;
