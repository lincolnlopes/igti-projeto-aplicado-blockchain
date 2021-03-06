import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { ISSUE_STORE } from '../../api';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Input from '../Forms/Input';
import TextArea from '../Forms/TextArea';
import Error from '../helpers/Error';

import styles from './IssueCreate.module.css';


const IssueCreate = () => {
  const summary = useForm();
  const description = useForm();
  const params = useParams();
  const navigate = useNavigate();

  //const [loading, setLoading] = useState(false);
  const token = window.localStorage.getItem('token');
  const { data } = React.useContext(UserContext);

  //const { data } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();
  //console.log(data);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = ISSUE_STORE(token, {
      summary: summary.value,
      description: description.value,
      registered_by: data.id,
      meeting_id: params.id,
    });

    const { response } = await request(url, options);
    if (response.ok) navigate('/issues');
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        {data ? data.id : 'Login'}
        <Input
          id="summary"
          label="Título"
          type="text"
          name="summary"
          placeholder="Título da pauta"
          variant="outlined"
          {...summary}
        />

        <TextArea
          id="description"
          label="Descrição da pauta"
          type="textarea"
          name="description"
          placeholder="Descrição do evento"
          variant="outlined"
          rows="4"
          {...description}
        />
        <div className={styles.inline}>

        
        {!loading ? (
          <Input
          id="submit"
          value="Aprovar"
          type="submit"
          onClick={handleSubmit}
          />
          ) : (
            <Input id="submit" value="Salvando.." disabled />
            )}
        <Error error={error} />           <Input
            id="submit"
            value="Rejeitar"
            type="submit"
            onClick={handleSubmit}
            />
                    <Input
            id="submit"
            value="Abster"
            type="submit"
            onClick={handleSubmit}
            />
            </div>
      </form>
    </section>
  );
};
export default IssueCreate;
