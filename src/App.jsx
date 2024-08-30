import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Greeting';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import "./App.css";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} /> {/* Homepage with Greeting */}
          <Route path="/about" element={<AboutMe />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;


