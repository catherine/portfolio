import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Weddings from './pages/Weddings';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{height: "100vh"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
