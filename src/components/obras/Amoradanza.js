import React from "react";
import Gallery from "../Gallery";
import image1 from '../../galleries/amoradanza/amoradanza1.jpg';
import image2 from '../../galleries/amoradanza/amoradanza2.jpg';
import image3 from '../../galleries/amoradanza/amoradanza3.jpg';
import image4 from '../../galleries/amoradanza/amoradanza4.jpg';
import image5 from '../../galleries/amoradanza/amoradanza5.jpg';
import image6 from '../../galleries/amoradanza/amoradanza6.jpg';
import image7 from '../../galleries/amoradanza/amoradanza7.jpg';
import image8 from '../../galleries/amoradanza/amoradanza8.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OtherWorks from "../OtherWorks";
import 'react-tabs/style/react-tabs.css';

const Amoradanza = () => {
const images = [
image1,
image2,
image3,
image4,
image5,
image6,
image7,
image8
];


return (  
<main className='main-section'>
<h1> Amoradanza</h1>
<div className='video-text'>
<div className='video-container'>
                <iframe className='videoembed' src="https://www.youtube.com/embed/tyfkmww-Cow?rel=0" width="560" height="315" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Espiral Raiz"></iframe>
</div>
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
    es un diálogo corpóreo y audiovisual , invita a reflexionar los cuerpos que transitan en diversos territorios para  generar espacios cotidianos desde la danza de la calma, el refugio, la tranquilidad o en otros que alteran al cuerpo con inseguridad, soledad, abandono, destierro, desamparo....es un estado donde el movimiento se identifica con la memoria de los lugares que surgen  del concepto “sentipensar”  es un pensamiento Latinoamericano como  alternativa que permite unir el pensamiento (lógica) con el sentimiento para pensar las relaciones entre las comunidades, sus territorio.
Amoradanza  expresa el concepto sentipensar desde un lenguaje de movimiento vivencial  propone al el cuerpo como intérprete del ayer y del hoy  que albergan imágenes, momentos, paisajes de la comuna.  <br /><br />

Amoradanza se grabó en diferentes barrios  de la comuna 13 como es el barrio  del Salado parte alta, 20 de julio, las  Independencia 1 y 2. La elección de estos lugares fueron elegidos por las diferentes perspectivas de espacio como son las escaleras, el horizonte, las casas, las aceras y el horizonte verde en contraste con la ciudad.<br /><br />

Esta pieza audiovisual fue creada con el  Programa de Planeación Local y Presupuesto Participativo de la Secretaría de Cultura Ciudadana de la Alcaldía de Medellín en el año 2023.<br /><br />
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
        <strong>Título de la obra:</strong>  Amoradanza <br />
        <strong>Duración de la obra:</strong> 25 minutos <br />
        <strong>Género:</strong> video Danza <br />
        <strong>Público:</strong> todo público <br />
        <strong>Bailarines: </strong> Ernesto Alonso Peña López <br />
        Mary Alejandra Gutiérrez González<br />
        <strong>Producción Audiovisual:</strong> Sebastián Rojas Gómez<br />
        <strong>Fotografía:</strong> Camila Muñoz Ruiz<br />
        <strong>Producción Musical</strong> Diego Alonso Lopera Mesa <br />
        <strong>Realización de vestuario</strong> Dora Emilsen Rodríguez <br />
        <strong>Asistente de trabajo</strong>Wilson Alexander Álvarez <br />
Ambrosio Álvarez Gómez <br />
Daniel Gutiérrez González<br />
        <strong>Diseño Gráfico: </strong> Santiago Gutiérrez González
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
</div>
    <div>
    <OtherWorks />
    </div>
</main>
);
}

export default Amoradanza;