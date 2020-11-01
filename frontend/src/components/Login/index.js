import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/create" element={<LoginCreate />}></Route>
        <Route path="/" element={<LoginPasswordLost />}></Route>
        <Route path="/" element={<LoginPasswordReset />}></Route>
      </Routes>
    </div>
  );
};

export default Login;
