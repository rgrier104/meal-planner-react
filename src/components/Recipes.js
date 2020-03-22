import React from 'react';
import { useSelector } from 'react-redux';

const Recipes = () => {

    const recipes = useSelector(state => state.recipes)

    return (

        <div>
            <ul>
                {recipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
            </ul>
        </div>
    )
}

export default Recipes;