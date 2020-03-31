import React from 'react';
import { useSelector } from 'react-redux';

const Recipes = () => {

    const recipes = useSelector(state => state.recipesReducer.recipes)
    
    return (

        <div>
            <ul>
                {recipes.map((recipe, i) => <li key={i}>{recipe.name}</li>)}
            </ul>
        </div>
    )
}

export default Recipes;