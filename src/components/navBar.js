import React from 'react';
import { Link } from "react-router-dom";
import logoEspiral from '../logo.png';
const NavBar = () => {
    return ( 
        <div className="nav">
<div className="logo"> 
<Link to="/">
    <img src={logoEspiral} className="logo"loading='lazy' alt='Espiral Raiz Danza Experimental'/>
 </Link>
</div>
<div className="links">
    <div className="nav-item">
    <Link className="nav-link" to="/conocenos">
        Conócenos
    </Link>
    </div>
    <div className="nav-item">
    <Link className="nav-link" to="/exploremos">
        Exploranos
    </Link>
    </div>
    <div className="nav-item">
    <Link className="nav-link" to="/aliemonos">
            Aliémonos
    </Link>
    </div>

    <div className="nav-item">
    <Link className="nav-link" to="/bailemos">
        Bailemos
    </Link>
    </div>
</div>
</div>
    )
}
 
export default NavBar;