import React from 'react';
import { useSelector } from 'react-redux';

const Modal = ({ show, closeModal, meal }) => {
    
    
    const recipes = useSelector(state => state.recipesReducer.recipes.filter(recipe => {
        if (meal === "Lunch" || meal === "Dinner") {
            return recipe.meal_type === "Entree"
        } else {
            return recipe.meal_type === meal
        } 
    }))
    
    return (
        <div className={show ? "overlay" : "hide"}>
            <div className={show ? "modal" : "hide"}>
                <button onClick={closeModal}>X</button>
                Select {meal}:
                <form>
                    <select>
                        {recipes.map(recipe => <option key={recipe.id}>{recipe.name}</option>)}
                    </select>
                    <input type="submit" value="Add Meal" />
                </form>
            </div>
        </div>
        
    )

}

export default Modal;