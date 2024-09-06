import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const PopupModal = ({ title, isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Popup Modal"
    >
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-brand-tertiayColor text-xl font-bold'>{title}</h1>
        <h3 className='bg-red-700 text-brand-whiteColor px-2 py-1 rounded-sm font-bold cursor-pointer' onClick={onClose}>X</h3>
      </div>
      {children}
    </Modal>
  );
};

export default PopupModal;