import React from 'react';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <p>
        <Input
          id="user"
          label="Usuário "
          type="text"
          placeholder="Digite o seu e-mail ou núm.celular"
        />
      </p>
      <p>
        <Input id="password" label="Senha " type="password" />
      </p>
      <Input id="submit" value="Enviar" type="button" />
    </form>
  );
};

export default Form;
