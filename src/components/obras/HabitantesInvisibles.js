import React from "react";
import Gallery from "../Gallery";
import image1 from '../../galleries/gargola/gargola.jpg';
import image2 from '../../galleries/gargola/gargola-santa-elena.jpg';
import image3 from '../../galleries/gargola/gargola-comuna-13.jpg';
import image4 from '../../galleries/gargola/gargola-oscura.JPG';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OtherWorks from "../OtherWorks";
import 'react-tabs/style/react-tabs.css';

const HabitantesInvisibles = () => {
const images = [
image1,
image2,
image3,
image4
];


return (  
<main className='main-section'>
    <h1> Habitantes Invisibles</h1>
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
        Habitantes invisibles es un montaje escénico que relata personajes en el olvido y su construcción del territorio desde el  significado simbólico de lo visible e invisible que proporciona el  camuflaje, la obra está dirigido en un circuito de instalaciones de piezas escenográficas texturizadas con elementos sensitivos (hojas, cartón, caneca de lata y botellas de plástico).    <br /> <br />
        Es una creación en danza experimental sobre cuerpos que hablan del olvido, su caracterización física y territorial donde se pierde el sentido de la intimidad y deriva su vida en el  espacio público, mutando entre la basura abandonada del ambiente cotidiano de la ciudad.  La obra es una reflexión danzaria  que interacciona con el público para sensibilizar sobre el significado de espacios comunes en la ciudad, la diversidad e inclusión social del  habitante en el olvido. <br /><br />
        Las escenas son un circuito donde la escenografía  y  los personajes desarrollan un recorrido para interactuar  en el espacio público y recrear momentos escénicos con el movimiento a través de imágenes, la participación del público, olores y sonidos cotidianos con el fin de percibir  al otro en el espacio público. <br /><br />
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
            <strong>Título de la obra:</strong>  Habitantes Invisibles <br />
            <strong>Duraciòn de la obra:</strong> 25 minutos <br />
            <strong>Género:</strong>  Danza performance <br />
            <strong>Público:</strong> todo público <br />
            <strong>Técnico:</strong>  personal que aporta la compañía es  1 operador de luz, sonido. <br />
            <strong>Espacios para presentar la obra:</strong>  sala para teatro,  espacio abiertos, espacio público, espacio no convencionales <br />
            <strong>Elementos escénicos:</strong> Vestuario, carro de rodillos, 2 canecas de latas, plástico y cajas de diferentes tamaños y una red de hojas. <br />
            <strong>Raider técnico:</strong>amplificador o parlantes de sonido, reproductor de sonido Máquina de humo con controlador DMX (A097) y su respectivo cableado, luces neón, gobos, calles de luces, pesas. <br />
            <strong>Creación y composición músical: </strong>  Diego Alonso Lopera. 
            </div>
            </TabPanel>
            <TabPanel>
            <h3>  Trayectoria</h3>
        
<ul>
<li>
Proyecto ganador de la  convocatoria de Estímulo al  Arte y la Cultura en Beca de  Creación en Danza para Solo  o Dúo Mediana Trayectoria  2019 Alcaldía de Medellín y  Secretaría de cultura  Ciudadana Habitantes Invisibles lugar Deck de madera  en la Biblioteca  EPM (Plaza de  Cisneros) 30 de agosto  27 de noviembre  del 2019.</li>
<li>
8° Festival de Danza Bogota  Mueve tus Sentidos Edición  Kalamo Danza  Contemporánea  Director Edgar Laiseca Enlace de acceso  Plataforma Digital  Viernes 7 de  agosto 2020.

</li>
<li>
Agenda en espacio Público  Alcaldía de Medellín y secretaría de cultura ciudadana 27 de noviembre 2020 Tranvía de Buenos Aires.
</li>
<li>
Estímulo grabación de video profesional  Obra Habitantes Invisibles 2020 Teatro Metropolitano  Jose Gutièrrez  Telemendellìn- Alcaldía de Medellín y Secretaría de cultura ciudadana.
</li>
<li>
Hay Festival Digital Medellìn- Video obra Habitantes invisibles 26 de noviembre 2021 Hay Festival Digital Medellìn Página del Festival.
</li>
<li>
Arte y cultura en el espacio Público Alcaldía de Medellìn 30 de noviembre del 2021  obra Habitantes Invisibles. Calle Carabobo entre el edificio Carrey y el Parque de las luce
</li>
<li>
III  Festival de Teatro Callejero Comuna 13 versión virtual 17 de febrero del 2021 Corporaciòn Recreando 
</li>
<li>
IV Festival Callejero comuna 13 - 24 de octubre del 2021 obra Habitantes invisibles Corporación cultural Recreando.
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

export default HabitantesInvisibles;