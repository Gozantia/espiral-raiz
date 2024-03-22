import React from 'react';
import Integrantes from '../grid-images/acerca.jpg';
const Acerca = () => {
    return (  
        <main className='main-section acerca'>
                  <img src={Integrantes} alt="Integrantes" />
            <h2> Integrantes</h2>
            <div className='integrantes-info'>
            <div>
            <h3>Ernesto Alonso Peña López </h3>
            <p>Actualmente es Estudiante de la Universidad de Antioquia en la Profesionalización en Danza (2021), Técnico en ejecución en danza Sena Regional de Antioquia  (2016)  Técnico danza folclórica en la E.PA (Escuela Popular de Art) (2005), realizo taller “iniciación a la pantomima” dictado por el maestro Elkin “mimo” Giraldo en el (2001), participo en el 7° Congreso Departamental de Recreación (2007), realizo Seminario Gestión Cultural para el Desarrollo Local con la Corporación Ateneo Porfirio Barba Jacob (2013). Como bailarín se ha integrado en diferentes grupos y colectivos artísticos de la ciudad de Medellín entre ellos la Corporación Cultural Canchimalos (2002-2007), Teatro Barra del Silencio como actor en la campaña “movida urbana”(2009), como coreógrafo creador participo  en el 1 Festival Performance de la comuna 4 con la obra “la Gárgola”(2007), participo en el evento “ciudad en movimiento” con el performance la Gárgola en el Teatro Universidad de Medellín en el marco de la Quinta Fiesta de las artes escénicas (2009)</p>
            
            </div>
            <div>
            <h3>Mary Alejandra Gutiérrez González</h3>
            <p>
            es licenciada en educación básica en danza de la Universidad de Antioquia (2013), desde el año 2012 gestora, artista y representante de Espiral Raíz en las Organizaciones Sociales y Civiles de la comuna 13. Experiencia como bailarina ha sido en diferentes grupos o colectivos de la ciudad de Medellín como es Barrio comparsa (2005), el Solle (2007), bailarina en la campaña “movida urbana” (2009) con la corporación Teatro Barra del silencio, en el (2013) participo en el 1° Seminario Nacional de Danza “La dirección artística como herramienta fundamental para la producción de alto nivel en Artes Escénicas. Formadora en Danza en Folclórica y bailes de salón en Formación Artística Presupuesto Participativo, Instituciones Educativas, Programas y talleres artísticos de la ciudad.
            </p>
            </div>
            </div>
        </main>
        );
}
 
export default Acerca;
