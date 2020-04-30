import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import axios from 'axios';

// Pages
import HomePage from './containers/HomePage/HomePage';
import RecipePage from './containers/RecipePage/RecipePage';
import SearchResultsPage from './containers/SearchResultsPage/SearchResultsPage';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact render={() => <HomePage />} />
        <Route path='/recipes' render={() => <RecipePage recipe={null} />} />
        <Route path='/search' render={() => <SearchResultsPage />} />
      </Router>
    </div>
  );
};

export default App;
