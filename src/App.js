import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/home';
import Acerca from './components/Acerca';
import Servicios from './components/servicios';
import Contacto from './components/contacto';
import Portafolio from './components/portafolio';
//import { AnimatePresence } from 'framer-motion/dist/framer-motion';
function App() {
  const location = useLocation();
  return (
<>
    <NavBar />
 
    <Routes location={location} key={location.pathname}>
      <Route index element={<Home />} />
      <Route path="/conocenos" element={<Acerca/>} />
      <Route path="/exploranos" element={<Portafolio/>} />
      <Route path="/aliemonos" element={<Servicios/>} />
      <Route path="/bailemos" element={<Contacto/>} />
    </Routes>
</>
    
  );
}

export default App;
