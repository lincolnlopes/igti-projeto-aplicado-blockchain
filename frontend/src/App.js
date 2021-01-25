import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProtectedRoute from './components/helpers/ProtectedRoute';
import Issue from './components/Issue';
//import IssueCreate from './components/Issue/IssueCreate';
//import logo from './logo.svg';
//import HowMany from './components/HowMany';
import Login from './components/Login';
import LoginCreate from './components/Login/LoginCreate';
import Meeting from './components/Meeting';
import MeetingCreate from './components/Meeting/MeetingCreate';
import User from './components/User';
import Home from './Home';
import NotFound from './NotFound';
import { UserStorage } from './UserContext';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="login/*" element={<Login />} />
            <Route path="login/create" element={<LoginCreate />} />
            <ProtectedRoute path="user/*" element={<User />} />
            <Route path="sobre" element={<About />} />
            <Route path="meetings/:id" element={<Meeting />} />
            <ProtectedRoute path="issues/*" element={<Issue />} />
            <Route path="meeting/create" element={<MeetingCreate />} />
            <Route path="" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}
