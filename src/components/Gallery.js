import React, { useState } from 'react';
import ImageModal from './Modal';

const Gallery = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
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
          alt={` ${index}`}
          onClick={() => openModal(index)}
        />
      ))}
      <ImageModal
        isOpen={modalIsOpen}
        images={images}
        initialIndex={selectedImageIndex}
        onClose={closeModal}
      />
    </div>
  );
};

export default Gallery;