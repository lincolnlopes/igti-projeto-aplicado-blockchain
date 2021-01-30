import React from 'react';
//import { useLocation, useParams } from 'react-router';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './index.module.css';
import MeetingCreate from './MeetingCreate';
import MeetingEdit from './MeetingEdit';

const Meeting = () => {
  const { login } = React.useContext(UserContext);

  if (login === false) {
    return <Navigate to="/login" />;
  }

  //const params = useParams();
  //const location = useLocation();
  //console.log(params);
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="edit/:id" element={<MeetingEdit />}></Route>
          <Route path="create" element={<MeetingCreate />}></Route>
          <Route path="/" element={<Meeting />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Meeting;
