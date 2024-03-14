import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={image} alt="Full-size" />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;