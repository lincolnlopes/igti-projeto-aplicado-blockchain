import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
//import logo from './logo.svg';
import HowMany from './components/HowMany';
import Login from './components/Login';
import Meeting from './components/Meeting';
import Home from './Home';
import NotFound from './NotFound';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/how" element={<HowMany />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/reuniao/:id" element={<Meeting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
