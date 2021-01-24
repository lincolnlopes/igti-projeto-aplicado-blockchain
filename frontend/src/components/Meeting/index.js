import React from 'react';
//import { useLocation, useParams } from 'react-router';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './index.module.css';
import MeetingCreate from './MeetingCreate';

const Meeting = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/login" />;
  }

  //const params = useParams();
  //const location = useLocation();
  //console.log(params);
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<Meeting />}></Route>
          <Route path="/create" element={<MeetingCreate />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Meeting;
