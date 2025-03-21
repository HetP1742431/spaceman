import React from "react";

function Modal({ show, title, message, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default Modal;
