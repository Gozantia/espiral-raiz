import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className="modal-content">
        <button onClick={prevImage} className="prev"><h4> </h4></button>
        <img src={images[currentIndex]} alt="Full-size" />
        <button onClick={nextImage} className="next"><h4>  </h4></button>
      </div>
      <button onClick={onClose} className="close"> <h4> x </h4> </button>
    </Modal>
  );
};

export default ImageModal;