import React from 'react';

import css from './Modal.module.css';

export const Modal = ({ onClose, children }) => {
  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal}>{children}</div>
    </div>
  );
};
