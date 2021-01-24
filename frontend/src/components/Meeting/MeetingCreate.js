import React from 'react';
import { MEET_STORE } from '../../api';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
//import { UserContext } from '../../UserContext';
import Input from '../Forms/Input';
import Error from '../helpers/Error';
import styles from './MeetingCreate.module.css';

const MeetingCreate = () => {
  const name = useForm();
  const description = useForm();
  const startDate = useForm();
  const endDate = useForm();

  //const [loading, setLoading] = useState(false);
  const token = window.localStorage.getItem('token');

  //const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(endDate.value);
    const { url, options } = MEET_STORE(token, {
      name: name.value,
      description: description.value,
      started_at: startDate.value,
      ended_at: endDate.value,
    });
    console.log(options);
    //const { response } = await request(url, options);
    //if (response.ok) userLogin(user.value, password.value);
    await request(url, options);
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Novo Evento</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Evento"
          type="text"
          name="name"
          placeholder="Nome do evento"
          variant="outlined"
          {...name}
        />

        <Input
          id="description"
          label="Descrição"
          type="text"
          name="description"
          placeholder="Descrição do evento"
          variant="outlined"
          {...description}
        />

        <Input
          id="startdate"
          label="Dt.Hr.Início"
          type="text"
          name="startdate"
          placeholder="Início do evento"
          variant="outlined"
          {...startDate}
        />

        <Input
          id="enddate"
          label="Dt.Hr.Início"
          type="text"
          name="enddate"
          placeholder="Fim do evento"
          variant="outlined"
          {...endDate}
        />

        {!loading ? (
          <Input
            id="submit"
            value="Salvar"
            type="submit"
            onClick={handleSubmit}
          />
        ) : (
          <Input id="submit" value="Salvando.." disabled />
        )}
        <Error error={error} />
      </form>
    </section>
  );
};
export default MeetingCreate;
