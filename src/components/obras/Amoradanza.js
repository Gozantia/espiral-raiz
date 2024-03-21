import React from "react";
import Gallery from "../Gallery";
import image1 from '../../galleries/gargola/gargola.jpg';
import image2 from '../../galleries/gargola/gargola-santa-elena.jpg';
import image3 from '../../galleries/gargola/gargola-comuna-13.jpg';
import image4 from '../../galleries/gargola/gargola-oscura.JPG';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OtherWorks from "../OtherWorks";
import 'react-tabs/style/react-tabs.css';

const Amoradanza = () => {
const images = [
image1,
image2,
image3,
image4
];


return (  
<main className='main-section'>
    <h1> Amoradanza</h1>
    <Tabs>
            <TabList>
            <Tab>Descripción</Tab>
            <Tab>Galería</Tab>
            <Tab>Ficha Técnica</Tab>
        <Tab>Trayectoria</Tab>
            </TabList>
            <TabPanel>
            <div className="container-section tab-content">
    <article>
        <p>
        El tema central  de la obra es representar el convite como una herramienta de unión, cooperación y construcción del territorio con el fin de resaltar la memoria social  cultural de una comunidad y su entorno que crece para compartir desde un  propósito de igualdad en un lugar propio donde vivir. Creando por medio de la danza y el video una población de cooperación  con herramienta de unión e identificación en su diversidad cultural.         <br /><br />
        Memorias en lienzo es un montaje dancístico que permite fortalecer la memoria cultural de los habitantes de la ciudad de Medellín a través de la danza, el teatro y el video mapping generando una interacción de los actores - bailarines con las imágenes, la música, la puesta en escena e integrando perspectivas conceptuales en el arte danzario.    <br /><br />
        La obra interactúa con el público desde la proyección visual del video mapping desarrollando situaciones, acciones, momentos, ritmos  que permiten crear con la danza y el teatro una historia de barrio y de vida como es la construcción de una casa, una cuadra o un colegio al proyectar imágenes  fortalece  a  la creación escénica  y la interacción con el público.
         </p>
        </ article >
        </div>
    </TabPanel>
    <TabPanel>
        <div  className="tab-content">
            <Gallery images={images}/>
            </div>
            </TabPanel>
    <TabPanel>
        <div className="tab-content">
            <h3>Ficha técnica: </h3>
            <strong>Título de la obra:</strong>  Memorias en lienzo <br />
            <strong>Duraciòn de la obra:</strong> 30 minutos <br />
            <strong>Género:</strong>  Danza contemporánea y urbana <br />
            <strong>Público:</strong> todo público <br />
            <strong>Espacios para presentar la obra:</strong>  sala para teatro. <br />
            <strong>Elementos escénicos:</strong> Vestuario, maleta  y  escenografía móvil de una puerta. <br />
            <strong>Raider técnico:</strong>Elipsoidal(es), Calles led, 6 Par de Leds RGBW de 3 Wt  outdoor, soporte para piso o estructura. <br />
            <strong>Creación y composición músical: </strong> Maicol Andres 
            </div>
            </TabPanel>
            <TabPanel>
            <h3>  Trayectoria</h3>
        
<ul>
<li>
Estímulo del Presupuesto  Participativo de la comuna  13 del año 2017 con la Beca  de creación en danza Alcaldía de Medellín,  Secretaría de cultura  Ciudadana. “Memorias en Lienzo” Auditorio  Parque Biblioteca  San Javier 23 de  noviembre  del 2017. </li>
<li>
Participación en la Agenda  Cultural 2018 de la  convocatoria Estímulos para el Arte y la  Cultura de la Secretaría de  Cultura de Medellín en el  Teatro Parque  Biblioteca San  Antonio de Prado 16 de agosto  y P. Biblioteca San Javier 26 de Octubre.

</li>
</ul>

            </TabPanel>
        </Tabs>
        <div>
        <OtherWorks />
        </div>
</main>
);
}

export default Amoradanza;