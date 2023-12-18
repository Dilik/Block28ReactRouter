import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import BlueComponent from './components/Blue';
import RedComponent from './components/Red';
import HomeComponent from './components/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/Blue">Blue</Link>
          <Link to="/Red">Red</Link>
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/Blue" element={<BlueComponent />} />
            <Route path="/Red" element={<RedComponent />} />
            <Route path="/" element={<HomeComponent />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
