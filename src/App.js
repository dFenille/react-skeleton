import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/topics" component={Home} />
      </div>
      
    </Router>
      
    );
  }
}

export default App;
