import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from './actions/fetchRecipes';
import Recipes from './components/Recipes';
import MealPlan from './components/MealPlan';
import OldMealPlans from './components/OldMealPlans';
import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes())
  },[dispatch])

    return (
      <div className="App">
        <h1>Meal Planner</h1>
          <MealPlan />
          <OldMealPlans />
          <Recipes />
      </div>
    );
  

}

export default App;
