import React from 'react';
import Input from '../Forms/Input';
//import Button from '../Forms/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
//import Error from '../Helper/Error';
import Head from '../helpers/Head';
import Error from '../helpers/Error';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';


const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('forgot', 'reset'),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {!loading ? (
          <Input
            id="submit"
            value="Enviar"
            type="submit"
            onClick={handleSubmit}
          />
        ) : (
          <Input
            id="submit"
            value="Enviando..."
            type="submit"
            disabled
            onClick={handleSubmit}
          />
        )}
          <Link className={styles.forgot} to="/login">Voltar</Link>

        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
