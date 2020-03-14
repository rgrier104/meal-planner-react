import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from './actions/fetchRecipes';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        Meal Planner
      </div>
    );
  }

}

export default connect(mapStateToProps, {fetchRecipes})(App);
