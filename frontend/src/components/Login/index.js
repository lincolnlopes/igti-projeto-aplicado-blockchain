import React from 'react';
import { Route, Routes } from 'react-router';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
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
