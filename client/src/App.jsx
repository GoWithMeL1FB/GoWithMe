import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/index.jsx';
import EditProfile from './components/EditProfile/EditProfile.jsx';
import Login from './components/LoginPage/LoginPage.jsx';
import Signup from './components/SignupPage/SignupPage.jsx';
import Search from './components/Search/Search.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path='/Signup' component={Signup} />
          <Route path='/EditProfile' component={EditProfile} />
          <Route path='/Login' component={Login} />
          <Route path='/Home' component={Home} />
          <Route path='/' component={Search} />
        </Switch>

      </div>
    )
  }
}

export default App;