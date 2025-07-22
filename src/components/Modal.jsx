import React from 'react'
import { createPortal } from 'react-dom'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function Modal({
    showModal,
    closeModal,
    children
}) {
    return (
        showModal ? (
            createPortal(
                <div className='modal__container' role='button' onClick={closeModal} onScroll={e => e.stopPropagation()}>
                    <div className='modal__content' onClick={e => e.stopPropagation()} >
                        <Button  onClick={closeModal} value="Cerrar" >
                            <FontAwesomeIcon icon={faClose} />
                        </Button>
                        {children}
                    </div>
                </div>,
                document.body
            )
        ) : undefined
    )
}

export default Modal