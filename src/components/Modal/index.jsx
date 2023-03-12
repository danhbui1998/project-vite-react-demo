import React from 'react';
import { createPortal } from 'react-dom';

import './Modal.scss';

const Modal = ({ visbile, maskCloseable, onCancel, children }) => {
    const onMaskeClick = () => {
        if (maskCloseable) onCancel?.();
    };

    if (!visbile) return null;

    return createPortal(
        <div className="modal" onClick={onMaskeClick}>
            <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            <div className="close" onClick={onCancel}>
                X
            </div>
        </div>,
        document.body,
    );
};

export default Modal;
