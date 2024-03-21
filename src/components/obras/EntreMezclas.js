import React from "react";
import Gallery from "../Gallery";
import image1 from '../../galleries/entremezclas/entremezclas1.jpg';
import image2 from '../../galleries/entremezclas/entremezclas2.jpg';
import image3 from '../../galleries/entremezclas/entremezclas3.jpg';
import image4 from '../../galleries/entremezclas/entremezclas4.jpg';
import image5 from '../../galleries/entremezclas/entremezclas5.jpg';
import image6 from '../../galleries/entremezclas/entremezclas6.jpg';
import image7 from '../../galleries/entremezclas/entremezclas7.jpg';
import image8 from '../../galleries/entremezclas/entremezclas8.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OtherWorks from "../OtherWorks";
import 'react-tabs/style/react-tabs.css';

const EntreMezclas = () => {
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
    <h1> Entre Mezclas</h1>
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
        Es una propuesta creativa en danza que propone momentos  que  evocan a través  del movimiento los paisajes, las tradiciones, la gente, los ritmos colombianos, es una obra escénica  que abarca la cotidianidad del ser humano y su diversidad cultural que habita en la ciudad a través  de las personas que llegan de diversos lugares de Colombia y se mezclan con las realidades culturales que ofrece el entorno en relación con la diversidad cultural desde la representación significativas como el laboreo, el enamoramiento, los  mitos y la ciudad lo cual nos permite conectara coreografía entre sí y enfatizar las acciones de  movimiento en el espacio.   <br /><br />
        Accionar desde el performance un espacio  genera  resignificación, propósito y herramienta desde el cuerpo a través de lo  social, artísticos, creativos  permite hacer tránsitos de memorias oscuras de la muerte en nuestras calles para generar mensajes que reconstruyen espacios para la vida.
        <br /><br />
        La obra Danza tradicional colombiana es una representación etno contemporánea o danza tradicional colombiana experimental ya que desde  diversas técnicas dancísticas Entre mezcla es una propuesta creativa en danza folclórica experimental que evoca los mitos urbanos, la diversidad del barrio con historias  de vida que se conectan a través de la danza para unirnos entre mezclarnos. </p>
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
            <strong>Título de la obra:</strong>  Entre mezclas <br />
            <strong>Duraciòn de la obra:</strong> 30 minutos <br />
            <strong>Género:</strong> Danza etno contemporánea<br />
            <strong>Público:</strong> todo público <br />
            <strong>Espacios para presentar la obra:</strong> sala para teatro,  Espacio abiertos, espacio público, espacio no convencionales <br />
            <strong>Elementos escénico:</strong>  Vestuario y  escenografía de una puerta. <br />
            <strong>Iluminación:</strong>3 luces Led, 3 elipsoidal. <br />
            <strong>Sonido: </strong> Aportar el teatro o el evento. <br />
            <strong>Camerino:</strong> aporte por el teatro camerino para los actores con espejos, buena iluminación para el maquillaje, acceso de agua y lavado. <br />
            </div>
            </TabPanel>
            <TabPanel>
            <h3>  Trayectoria</h3>
        
<ul>
<li>
Fortalecimiento  del sector cultural estímulos  a la creación artística y  cultural de la comuna 13, en  el año 2013"   MADEMO- Mas Desarrollo  Moderno.  Obra de Danza Entre  mezclas.  Muestra y  socialización del  estímulo I. E  Benedikta Zur  Nieden 31 de mayo  del 2013. <br />
Altavista Semana cultural y  El Corregimiento del Consejo  de Cultura Entre mezclas. Corporación  Cultural Altavista. Agosto del  2013

</li>
<li>
Festival de Teatro en el  Municipio La Palma  Cundinamarca invitados por  la Secretaría de salud y  desarrollo social. “Entre mezclas” Casa de la Cultura  Municipio La  Palma  Cundinamarca 9 y 11 de  septiembre  2014.
</li>
<li>
Programación Cultural  Comuna 13 Fiestas del 20 de  Julio obra: Entre Mezclas 2017,2018,2019.

</li>
<li>
    
Estímulos para el Arte y la  Cultura de la Secretaría de  Cultura de Medellín Agenda cultural P. Biblioteca Pública El Poblado  UVA Ilusión Verde 29 de  septiembre y  P. Biblioteca La  Floresta 12 de  Octubre del 2018.
</li>
<li>
Participaciòn de la III Temporada Internacional de danza DanzaMed 2020 en el Teatro Metropolitano  José Gutièrrez, transmitido por el  Canal Telemendellìn.
</li>
<li>
Estímulo de circulación de las artes escénicas Medellìn vive las artes 2021 con la obra Entre Mezclas en el Festiartes Biblioteca Uva Nuevo Occidente.

</li>
<li>
Convocatoria de fomento y estímulo PDL y PP de cultura comuna 13- 2021 Obra Entre Mezclas en los espacios:<br />
Biblioteca Diego Echavarrìa Misas Itagüí.<br />
Teatro Jairo Alberto Valencia Corporación Cultural Altavista corregimiento de Altavista.<br />
Unidad para las víctimas Barrio Belencito comuna 13.<br />

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

export default EntreMezclas;