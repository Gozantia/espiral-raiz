import React from 'react';
import { Link } from "react-router-dom";
import logoEspiral from '../logo.png';
import { HashLink } from 'react-router-hash-link';
const NavBar = () => {
    return ( 
        <header>
<div className="logo"> 
<Link to="/">
    <img src={logoEspiral} loading='lazy' alt='Espiral Raiz Danza Experimental'/>
    <div>
 <span>Espiral Raiz <br /></span>
 <span>Danza Experimental <br /></span>
 </div>
 </Link>

</div>
<nav className="burger-menu links">
<input className="menu-check" type="checkbox" name="menu-check" value="" id="menu-check" />
    <label className="menu-open" htmlFor="menu-check">
      <span className="burger1"></span>
      <span className="burger2"></span>
      <span className="burger3"></span>
    </label>
    <ul className="menu-options">
    <li className="nav-item">
    <HashLink smooth to="/#nosotros">
        Conócenos
 
    </HashLink>
    
    </li>
    <li className="nav-item">
    <HashLink smooth to="/#portafolio">
        Explóranos
    </HashLink>
    </li>
    <li className="nav-item">
    <HashLink className="nav-link" smooth to="/#servicios">
            Aliémonos
    </HashLink>
    </li>

    <li className="nav-item">
    <HashLink className="nav-link" smooth to="/#contacto"> Bailemos
    </HashLink>     
    </li>

    </ul>
</nav>
</header>
    )
}
 
export default NavBar;