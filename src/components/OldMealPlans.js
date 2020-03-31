import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealPlans } from '../actions/fetchMealPlans';

const OldMealPlans = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMealPlans())
    }, [dispatch])

    const meal_plans = useSelector(state => state.mealPlansReducer.meal_plans)
   
    return (
        <div>
            {meal_plans.map(meal_plan => <li key={meal_plan.id}>{meal_plan.name},{meal_plan.notes}</li>)}
        </div>
    )
}

export default OldMealPlans;