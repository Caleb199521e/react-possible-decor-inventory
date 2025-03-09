import React from 'react';
import './ErrorModal.css';

const ErrorModal = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="error-modal-overlay" onClick={onClose}>
      <div className="error-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="error-modal-header">
          <h2>Error</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="error-modal-body">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;