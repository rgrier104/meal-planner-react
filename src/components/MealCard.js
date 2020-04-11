import React, { Fragment } from 'react';
import { useState } from 'react';
import Modal from './Modal';

const MealCard = ({ meal }) => {

    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    // Add recipe to meal card - probably change to useSelector to connect with Redux store after backend is connected
    const [recipe, setRecipe] = useState("")

    return (
        <div>
            {recipe ? (
                <a href="" target="_blank">{recipe.name}</a>
            ) : (
                <Fragment>
                    <button onClick={openModal}>Select {meal}</button>
                    <Modal show={show} closeModal={closeModal} meal={meal} setRecipe={setRecipe} />
                </Fragment>
            )}
        </div>
    )
}

export default MealCard;