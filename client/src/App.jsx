import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import { PrivateRoute } from './components/global/Private/Private.js';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import EditProfile from './components/EditProfile/EditProfile.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

      <div>
      <BrowserRouter>
        <Switch>
          <Route path='/Login' component={LoginPage}/>
          <Route path='/Home' component={Home} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </BrowserRouter>
      </div>

    )
  }
}

export default App;