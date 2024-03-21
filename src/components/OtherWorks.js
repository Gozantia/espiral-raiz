// components/OtherWorks.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import obras from "../data/obras";

const OtherWorks = () => {
  const location = useLocation();
  const currentObraRoute = location.pathname; // Current obra route

  return (
    <section className='grid-container '>
    <h2>Explora nuestros otros trabajos</h2>
    <div className='grid-obras otherworks'>
      {obras.map((obra) => 
        // Only show other obras, exclude current obra
        (obra.route !== currentObraRoute) && (
          <Link to={obra.route} key={obra.id}>
      
            <div className='item-grid-container'>
              <div className="item-grid">
              <img src={obra.image} alt={obra.title} />
              <h3>{obra.title}</h3>
             </div>
            </div>
          </Link>
        )
      )}
    </div>
    </section>
  );
};

export default OtherWorks;