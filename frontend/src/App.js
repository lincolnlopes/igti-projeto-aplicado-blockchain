import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import IssueCreate from './components/Issue/IssueCreate';
//import logo from './logo.svg';
//import HowMany from './components/HowMany';
import Login from './components/Login';
import LoginCreate from './components/Login/LoginCreate';
import Meeting from './components/Meeting';
import MeetingCreate from './components/Meeting/MeetingCreate';
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
            <Route path="/login/*" element={<Login />} />
            <Route path="/login/create" element={<LoginCreate />} />
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/reuniao/:id" element={<Meeting />} />
            <Route path="/pauta/create/:id" element={<IssueCreate />} />
            <Route path="/reuniao/create" element={<MeetingCreate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}
