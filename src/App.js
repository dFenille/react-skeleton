import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {CookiesProvider} from 'react-cookie'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import requireAuth from './services/utils/RequireAuth'
import configStore from './services/redux/store/configStore';
class App extends Component {
  render() {
    return (
      <CookiesProvider>
          <Provider store={configStore}>
            <Router>
              <div>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={requireAuth(Home)} />
                <Route path="/topics" component={requireAuth(Home)} />
              </div>
              
            </Router>
          </Provider>
        </CookiesProvider>
    );
  }
}

export default App;
