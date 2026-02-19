import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Preadmission from './pages/Preadmission';
import Historique from './pages/Historique';
import Professionals from './pages/Professionals';
import Actualites from './pages/Actualites';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preadmission" element={<Preadmission />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/professionnels" element={<Professionals />} />
          <Route path="/actualites" element={<Actualites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
