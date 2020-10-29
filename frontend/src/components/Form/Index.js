import React from 'react';
import Input from './Input';
import InputState from './InputState';

const Form = ({ setTextTitle }) => {
  const [ativo, setAtivo] = React.useState(true);

  async function handlerClick() {
    const json = await fetch(
      'http://localhost:3001/network/qty'
    ).then((result) => result.json());
    setTextTitle(json.qty);
    setAtivo(!ativo);
  }
  return (
    <form>
      <InputState
        id="user"
        label="Usuário "
        type="text"
        placeholder="Digite o seu e-mail ou núm.celular"
      />

      <Input id="password" label="Senha " type="password" />

      <Input id="submit" value={ativo} type="button" onClick={handlerClick} />
    </form>
  );
};

export default Form;
