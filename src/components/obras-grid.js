import React from 'react';
import { Link } from "react-router-dom";
const ObrasGrid = () => {
    return ( <>
    <section className='grid-container'>
    <h2>Explóranos</h2>
    <container className='grid-obras'>
        <Link className='' to="/exploranos/entre-mezclas">
        <div className='item-grid-container'>
        <div className='item-grid entre-mezclas'>
        </div>
        <h3> Entre Mezclas </h3>
        </div>
        </Link>
        <Link className='' to="/exploranos/memorias-lienzo">
        <div className='item-grid-container'>
        <div className='item-grid  memorias'></div>
        <h3>Memorias en lienzo </h3>
        </div>
        </Link>
        <Link className='' to="/exploranos/habitantes-invisibles">
        <div className='item-grid-container'>
        <div className='item-grid habitantes'> </div>
        <h3> Habitantes Invisibles </h3>
        </div>
        </Link>
        <Link to="/exploranos/gargola">
        <div className='item-grid-container'>
        <div className='item-grid  gargola'></div>
        <h3> La Gárgola </h3>
        </div>
        </Link>
        <Link to="/exploranos/amoradanza">
        <div className='item-grid-container'>
        <div className='item-grid amoradanza'> </div>
        <h3>Amoradanza </h3>
        </div>
        </Link>
    </container>
    </section>
        </>
    )
}
export default ObrasGrid;
