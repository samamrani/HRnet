import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  // Fermer la modale avec la touche 'Esc'
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') { 
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);  
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Ne rien afficher si la modale n'est pas ouverte
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
