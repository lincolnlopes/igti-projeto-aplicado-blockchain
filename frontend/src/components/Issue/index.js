import React from 'react';
//import { useLocation, useParams } from 'react-router';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from '../../NotFound';
import { UserContext } from '../../UserContext';
import Head from '../helpers/Head';
//import styles from './index.module.css';
import IssueCreate from './IssueCreate';
import IssueHeader from './IssueHeader';
import IssueList from './IssueList'

const Issue = () => {
  const { login } = React.useContext(UserContext);

  if (!login) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="container">
      <Head title='Minha conta'/>

        <IssueHeader/>
        <Routes>
          <Route path="create/:id" element={<IssueCreate />}></Route>
          <Route path="create" element={<IssueCreate />}></Route>
          <Route path="/" exact={true} element={<IssueList />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

    </section>
  );
};

export default Issue;
