import React from 'react';
//import { useLocation, useParams } from 'react-router';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Head from '../helpers/Head';
//import styles from './index.module.css';
import MeetingCreate from './MeetingCreate';
import MeetingEdit from './MeetingEdit';
import MeetingHeader from './MeetingHeader';
import MeetingList from './MeetingList';

const Meeting = () => {
  const { login } = React.useContext(UserContext);

  if (!login) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="container">
        <Head title='Minha conta'/>
        <MeetingHeader />
        <Routes>
          <Route path="edit/:id" element={<MeetingEdit />}></Route>
          <Route path="create" element={<MeetingCreate />}></Route>
          <Route path="/" element={<MeetingList />}></Route>
        </Routes>
    </section>
  );
};

export default Meeting;
