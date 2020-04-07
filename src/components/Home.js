import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h1>Meal Planner</h1>
            <div className="routerLinksContainer">
                <Link to="/meal_plans/new" className="routerLinks">Create a New Meal Plan</Link>
                <Link to="/meal_plans" className="routerLinks">View Old Meal Plans</Link>
                <Link to="/recipes" className="routerLinks">View Recipes</Link>
            </div>
        </div>
    )
}

export default Home;