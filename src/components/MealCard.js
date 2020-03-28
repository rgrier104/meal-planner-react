import React from 'react';
import { useState } from 'react';
import Modal from './Modal';

const MealCard = ({ meal }) => {

    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    return (
        <div>
            <button onClick={openModal}>Select {meal}</button>
            <Modal show={show} closeModal={closeModal} meal={meal} />
        </div>
    )
}

export default MealCard;