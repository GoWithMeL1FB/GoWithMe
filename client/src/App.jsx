import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import EditProfile from './components/EditProfile/EditProfile.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import { Redirect } from '../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router';

// function checkToken() {

// }

// const PrivateRoute = ({component: Component, ...rest}) => (
//   <Route  {...rest} render={props => (
//     checkToken ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/Login',
//         state: {from: props.location}
//       }}/>
//     )
//   )}/>
// )

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
          <Route path='/Home' component={Home} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </BrowserRouter>
      </div>

    )
  }
}

export default App;