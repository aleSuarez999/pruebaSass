import React from 'react'
import { createPortal } from 'react-dom'

function Modal({
    showModal,
    closeModal,
    children
}) {
    return (
        showModal ? (
            createPortal(
                <div className='modal__container' role='button' onClick={closeModal}>
                    <div className='modal__content' onClick={e => e.stopPropagation()} >
                        {children}
                    </div>
                </div>,
                document.body
            )
        ) : undefined
    )
}

export default Modal