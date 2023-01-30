import { Routes, Route } from 'react-router-dom';
import React from 'react';

import ProjectsPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutPage from './components/AboutPage';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<div><Navbar /><Home /></div>} />
        <Route path='/projects' element={<div><Navbar /><ProjectsPage /><Footer /></div>} />
        <Route path='/about' element={<div><Navbar /><AboutPage /><Footer /></div>} />
        <Route path='/contact' element={<div><Navbar /><ContactPage /><Footer /></div>} />
      </Routes>
    </>
  );
};

export default App;
