import React, { useState } from 'react';
import ImageModal from './Modal';

const Gallery = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={``}
          onClick={() => openModal(image)}
        />
      ))}
      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
};

export default Gallery;