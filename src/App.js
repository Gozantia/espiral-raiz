import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/home';
import Acerca from './components/Acerca';
import Servicios from './components/servicios';
import Contacto from './components/contacto';
import Portafolio from './components/portafolio';
import Gargola from './components/obras/gargola';
import EntreMezclas from './components/obras/EntreMezclas';
import HabitantesInvisibles from './components/obras/HabitantesInvisibles';
import MemoriasEnLienzo from './components/obras/MemoriasEnLienzo';
function App() {
  const location = useLocation();
  return (
<>
    <NavBar />
 
    <Routes location={location} key={location.pathname}>
      <Route index element={<Home />} />
      <Route path="/conocenos" element={<Acerca/>} />
      <Route path="/exploranos" element={<Portafolio/>} />
      <Route path='/obras/gargola' element={<Gargola/>}/>
      <Route path='/obras/entre-mezclas' element={<EntreMezclas />}/>
      <Route path='/obras/amoradanza' element={<Gargola/>}/>
      <Route path='/obras/habitantes-invisibles' element={<HabitantesInvisibles/>}/>
      <Route path='/obras/memorias-lienzo' element={<MemoriasEnLienzo/>}/>
      <Route path="/aliemonos" element={<Servicios/>} />
      <Route path="/bailemos" element={<Contacto/>} />
    </Routes>
</>
    
  );
}

export default App;
