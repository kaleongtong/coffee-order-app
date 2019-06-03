import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Route from 'react-router-dom/Route';

import './App.css';
import Home from './pages/Home';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
