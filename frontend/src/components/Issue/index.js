import React from 'react';
//import { useLocation, useParams } from 'react-router';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './index.module.css';
import IssueCreate from './IssueCreate';

const Issue = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/" />;
  }

  //const params = useParams();
  //const location = useLocation();
  console.log(login);
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<Issue />}></Route>
          <Route path="/create" element={<IssueCreate />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Issue;
