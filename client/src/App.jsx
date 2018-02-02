import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/index.jsx';
import EditProfile from './components/EditProfile/EditProfile.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container">
        <Switch>
          <Route path='/EditProfile' component={EditProfile} />
          <Route path='/Home' component={Home} />
          <Route path='/' component={LandingPage} />
        </Switch>

      </div>
    )
  }
}

export default App;