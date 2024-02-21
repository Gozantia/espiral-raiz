import React from 'react';
import logoEspiral from './logo.png';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/home';
function App() {
  const location = useLocation();
  return (
<>
    <NavBar />
    <Routes location={location} key={location.pathname}>
      <Route index element={<Home />}>

      </Route>

    </Routes>
</>
    
  );
}

export default App;
