import React from 'react'
import { useParams } from 'react-router'
import { MEET_SHOW, MEET_UPDATE } from '../../api';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import Input from '../Forms/Input';
import Error from '../helpers/Error';
import styles from './MeetingCreate.module.css';

const MeetingEdit = () => {

  //const [data, setData] = React.useState({});

  const name = useForm();
  const description = useForm();
  const startDate = useForm();
  const endDate = useForm();

  const {id} = useParams();
  const token = window.localStorage.getItem('token');
  const { loading, error, request } = useFetch();
  const { url, options } = MEET_SHOW(token, id);
  
  React.useEffect(async () => {
    const {json} = await request(url, options);
    console.log(json);
    name.setValue(json.name);
    description.setValue(json.description);
    startDate.setValue(json.started_at);
    endDate.setValue(json.ended_at);
    //console.log(data)
  },[]);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(endDate.value);
    const { url, options } = MEET_UPDATE(token, {
      name: name.value,
      description: description.value,
      started_at: startDate.value,
      ended_at: endDate.value,
    }, id);
    await request(url, options);
  }


  return (
    <section>
      <form className={styles.form} >
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
  )
}

export default MeetingEdit
