import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchMealPlans } from '../actions/fetchMealPlans';

const OldMealPlans = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMealPlans())
    }, [dispatch])

    const meal_plans = useSelector(state => state.mealPlansReducer.meal_plans)
   
    return (
        <div>
            {meal_plans.map(meal_plan =>
                <NavLink to={`/meal_plans/${meal_plan.id}`} exact key={meal_plan.id}>
                    <li key={meal_plan.id}>{meal_plan.name},{meal_plan.notes}</li>
                </NavLink>
            )}
        </div>
    )
}

export default OldMealPlans;