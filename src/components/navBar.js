import React from 'react';
import { Link } from "react-router-dom";
import logoEspiral from '../logo.png';
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
    <Link className="nav-link" to="/conocenos">
        Conócenos
    </Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/exploranos">
        Explóranos
    </Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/aliemonos">
            Aliémonos
    </Link>
    </li>

    <li className="nav-item">
    <Link className="nav-link" to="/bailemos">
        Bailemos
    </Link>
    </li>

    </ul>
</nav>
</header>
    )
}
 
export default NavBar;