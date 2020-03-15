import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

// Pages
import TestPage from './containers/TestPage/TestPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    axios
      .get('/api/recipes')
      .then(res => this.setState({ recipes: res.data }))
      .catch(alert);
  }

  render() {
    const { recipes } = this.state;

    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={TestPage} />
        </Router>
      </div>
    );
  }
}

export default App;