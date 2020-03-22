import React from 'react';
import MealCard from './MealCard';

const DayCard = ({ day }) => {

    const meals = ["Breakfast","Lunch","Dinner","Snack"]

    return (
        <div>
            <h3>{day}</h3>
            {meals.map(meal => <MealCard meal={meal} key={meal} />)}
        </div>
    )
}

export default DayCard;