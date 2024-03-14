import React from "react";
import Gallery from "../Gallery";
import image1 from '../../galleries/gargola/gargola.jpg';
import image2 from '../../galleries/gargola/gargola-santa-elena.jpg';
import image3 from '../../galleries/gargola/gargola-comuna-13.jpg';
const Gargola = () => {
    const images = [
        image1,
        image2,
        image3
      ];

      
    return (  
        <main className='main-section'>
            <h1>Gargola</h1>
            <span>hello </span>
            <Gallery images={images} />
        </main>
        );
}
 
export default Gargola;