import React from 'react';
import DayCard from './DayCard';

const MealPlan = () => {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <div>
            {days.map(day => <DayCard day={day} key={day} />)}
        </div>
    )
}

export default MealPlan;