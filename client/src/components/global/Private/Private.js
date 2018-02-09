import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import jwtDecode from 'jwt-decode';


export const PrivateRoute = ({component: Component, ...rest}) => {
  if(!sessionStorage.getItem('authentication')) {
    var exp = 0;
  } else {
    var { exp } = jwtDecode(sessionStorage.getItem('authentication'))
  }
  return(
    <Route  {...rest} render={props => (
        
        exp > Math.floor(Date.now() / 1000) ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/Login',
            state: {from: props.location}
          }}/>
        )
      )}/>
  )
};
