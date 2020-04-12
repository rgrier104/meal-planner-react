import React, { Fragment } from 'react';
import { useState } from 'react';
import Modal from './Modal';

const MealCard = ({ meal }) => {

    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    // Add recipe to meal card - probably change to useSelector to connect with Redux store after backend is connected
    const [recipeName, setRecipeName] = useState("")
    const [recipeUrl, setRecipeUrl] = useState("")

    function handleChange(newName, newUrl) {
        setRecipeName(newName);
        setRecipeUrl(newUrl);
    }

    return (
        <div>
            {recipeName ? (
                <a href={recipeUrl} target="_blank" rel="noopener noreferrer">{recipeName}</a>
            ) : (
                <Fragment>
                    <button onClick={openModal}>Select {meal}</button>
                    <Modal show={show} closeModal={closeModal} meal={meal} handleChange={handleChange} />
                </Fragment>
            )}
        </div>
    )
}

export default MealCard;