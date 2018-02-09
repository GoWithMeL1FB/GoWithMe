import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import EditProfile from './components/EditProfile/EditProfile.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import jwtDecode from 'jwt-decode'

const PrivateRoute = ({component: Component, ...rest}) => {
  const { exp } = jwtDecode(sessionStorage.getItem('authentication'))
  return(
    <Route  {...rest} render={props => (
        
        exp < Math.floor(Date.now() / 1000) ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/Login',
            state: {from: props.location}
          }}/>
        )
      )}/>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('props for App', this.props)
    return (
    
      <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path='/Login' component={LoginPage}/>
          <PrivateRoute path='/Home' component={Home} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </BrowserRouter>
      </div>

    )
  }
}

export default App;