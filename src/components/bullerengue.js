import Gallery from "./Gallery";

import image1 from '../galleries/bullerengue/de-la-montaña-al-mar-1.jpeg';
import image2 from '../galleries/bullerengue/de-la-montaña-al-mar-2.jpeg';
import image3 from '../galleries/bullerengue/de-la-montaña-al-mar-3.jpeg';
import image4 from '../galleries/bullerengue/de-la-montaña-al-mar-4.jpeg';
import image5 from '../galleries/bullerengue/de-la-montaña-al-mar-5.jpg';
const Bullerengue = () => {
    const images = [
image1,
image2,
image3,
image4,
image5
];

    return (  
        <section className='main-section bullerengue-section'>
            
            <h2>"De la montaña al mar"Laboratorio creativo de danza de los Gallinazos y Danza del Bullerengue.</h2>
            <div className='video-text'>
            <div className='video-container'>
            <iframe width="560"  className='videoembed'  height="315" src="https://www.youtube.com/embed/A55iwLSwM8o?si=a0unG3niv-UsNBXi?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='text-container'>
                <p>
                    El laboratorio creativo y pedagógico "De la Montaña hacia el Mar" reunió a diversos grupos artísticos de danza de la Comuna 13 para explorar y resaltar los conocimientos y las tradiciones culturales de dos danzas emblemáticas de Antioquia: el bullerengue y la danza andina.
                </p>
                <p> 
                    Este espacio se diseñó para generar aprendizaje, encuentro y promoción cultural a través de la danza, fomentando el crecimiento de saberes ancestrales y el conocimiento cultural mediante el movimiento, la expresión corporal y encuentros comunitarios. El objetivo principal es salvaguardar el conocimiento de los sabedores y portadores culturales del territorio, fortaleciendo así la herencia dancística de Antioquia.
                </p>
             </div>
             </div>
             <Gallery images={images}/>
        </section>
        );
}
 
export default Bullerengue;