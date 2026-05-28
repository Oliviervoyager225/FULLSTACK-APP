import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Preadmission from './pages/Preadmission';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preadmission" element={<Preadmission />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
