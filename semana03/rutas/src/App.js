import './App.css';

import React from 'react';
import Login from "./components/Login";
import Registro from './components/Regitro';
import Perfil from './components/Perfil';
import Navbar from './components/Navbar';
import Galeria from './components/Galeria';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Navbar />} >
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/galeria" element={<Galeria />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
