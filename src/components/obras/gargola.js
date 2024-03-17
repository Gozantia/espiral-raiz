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
        <h1>Gárgola</h1>
        <div className="container-section">
    <article>
        <p>
        El performance que surge desde la vivencia y experiencia como artista de la comuna 13 ciudad de Medellín, es un homenaje artístico por los acontecimientos de la operación orión el cual fue una guerra para ejercer el control del territorio de las fuerzas armadas colombianas sobre  los grupos ilegales que ejercen en el territorio urbano causando  desaparición forzada, falsos positivos y desplazamiento urbano;  Fue en esta época como artista del territorio quise explorar e interpretar mi visión sobre este suceso ya que afectó a muchas personas por esta  la intención en mi proyectar un performance que brinda la visión de un personaje amorfo...un ser orgánico de barro, de tierra, con hojas y pigmentos naturales, es  un ser mutado por la guerra que ocasiona rigidez en su cuerpo, sus movimientos lentos siguen el impulso de su corazón para salir triunfante de la verdad.
        <br /><br />
Accionar desde el performance un espacio  genera  resignificación, propósito y herramienta desde el cuerpo a través de lo  social, artísticos, creativos  permite hacer tránsitos de memorias oscuras de la muerte en nuestras calles para generar mensajes que reconstruyen espacios para la vida.
<br /><br />
La construcción del performance en el espacio público es a través del elemento del barro el cual con diversos elementos y pigmentos naturales, sus movimientos tensos, pesados y  lentos van en la búsqueda de la verdad como liberadora del alma de su cuerpo permitiendo renacer de nuevo en el barro.
</p>
</ article >
<div>
<h3>Ficha técnica: </h3>
<strong>Título de la obra:</strong> La gárgola<br />
<strong>Duraciòn de la obra:</strong> 25 minutos <br />
<strong>Género:</strong> Performance Danza Butoh y  Body Paint (maquillaje corporal)<br />
<strong>Público:</strong>  Mayores de 15 años <br />
<strong>Espacios para presentar la obra:</strong> sala para teatro,  Espacio abiertos, espacio público, espacio no convencionales <br />
<strong>Elementos escénico:</strong>  Barro o arcilla, agua y una mesa <br />
<strong>Iluminación:</strong>3 luces Led, 3 elipsoidal. <br />
<strong>Sonido: </strong> Aportar el teatro o el evento. <br />
<strong>Camerino:</strong> aporte por el teatro camerino para los actores con espejos, buena iluminación para el maquillaje, acceso de agua y lavado. <br />
</div>
</div>
        <Gallery images={images} />
    </main>
    );
}

export default Gargola;