import React from 'react';
import { useNavigate } from 'react-router';
import Input from '../Form/Input';

const Login = () => {
  const navigate = useNavigate();

  function handlerClick() {
    console.log('fazer login!');
    navigate('/');
  }

  return (
    <>
      <h1>Login Page</h1>
      <Input id="submit" value="Login" type="button" onClick={handlerClick} />
    </>
  );
};

export default Login;
