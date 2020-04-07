import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchRecipes } from './actions/fetchRecipes';
import Home from './components/Home';
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
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/meal_plans/new" component={MealPlan} />
          <Route path="/meal_plans" component={OldMealPlans} />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </div>
    );
  

}

export default App;
