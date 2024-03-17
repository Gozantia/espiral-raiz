import React, { useState } from 'react';
import Modal from 'react-modal';

// Estilos personalizados para el modal
const customStyles = {
  content: {
    top: '50%', // Posición vertical centrada
    left: '50%', // Posición horizontal centrada
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%', // Centrado horizontalmente
    transform: 'translate(-50%, -50%)', // Centrado vertical y horizontal
  },
};

// Configura el elemento raíz para el modal (accesibilidad)
Modal.setAppElement('#root');

// Componente funcional que muestra un modal con navegación de imágenes
const ImageModal = ({ isOpen, images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex); // Estado para el índice de la imagen actual

  // Función para mostrar la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para mostrar la imagen anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Modal
      isOpen={isOpen} // Estado que controla si el modal está abierto
      onRequestClose={onClose} // Función para cerrar el modal
      style={customStyles} // Estilos personalizados para el modal
      contentLabel="Image Modal" // Etiqueta para el modal (accesibilidad)
    >
      <div className="modal-content">
        <button onClick={prevImage}>Previous</button> {/* Botón para mostrar la imagen anterior */}
        <img src={images[currentIndex]} alt="Full-size" /> {/* Imagen actual */}
        <button onClick={nextImage}>Next</button> {/* Botón para mostrar la siguiente imagen */}
      </div>
      <button onClick={onClose}>Close</button> {/* Botón para cerrar el modal */}
    </Modal>
  );
};

export default ImageModal;