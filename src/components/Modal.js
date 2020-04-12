import React from 'react';
import { useSelector } from 'react-redux';

const Modal = ({ show, closeModal, meal, handleChange }) => {
    
    
    const recipes = useSelector(state => state.recipesReducer.recipes.filter(recipe => {
        if (meal === "Lunch" || meal === "Dinner") {
            return recipe.meal_type === "Entree"
        } else {
            return recipe.meal_type === meal
        } 
    }))

    function handleSubmit(e) {
        e.preventDefault()
        let recipe = recipes.filter(recipe => recipe.id === parseInt(e.target.recipeName.value))
        handleChange(recipe[0].name, recipe[0].url)
        // update to make cleaner
    }
    
    return (
        <div className={show ? "overlay" : "hide"}>
            <div className={show ? "modal" : "hide"}>
                <button onClick={closeModal}>X</button>
                Select {meal}:
                <form onSubmit={handleSubmit}>
                    <select name="recipeName" >
                        {recipes.map(recipe => <option key={recipe.id} value={recipe.id}>{recipe.name}</option>)}
                    </select>
                    <input type="submit" value="Add Meal" />
                </form>
            </div>
        </div>
        
    )

}

export default Modal;