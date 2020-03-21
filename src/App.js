import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from './actions/fetchRecipes';
import Recipes from './components/Recipes';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div className="App">
        <h1>Meal Planner</h1>
          <Recipes />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, {fetchRecipes})(App);
