import React from 'react';

const Modal = ({ show, closeModal, meal }) => {

    return (
        <div className={show ? "overlay" : "hide"}>
            <div className={show ? "modal" : "hide"}>
                <button onClick={closeModal}>X</button>
                Select {meal} form
            </div>
        </div>
        
    )

}

export default Modal;