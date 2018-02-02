import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, NavItem, Icon } from 'react-materialize';
import Search from '../../global/Search/Search.jsx'

class Nav extends Component {

  render() {
    return (
      <div>
      <Navbar brand='GO WITH ME' right href='http://localhost:3050/Home'>
        <NavItem ><Icon>account_circle</Icon>Account</NavItem>
	      <NavItem><Icon>supervisor_account</Icon>Search</NavItem>
	      <NavItem><Icon>turned_in</Icon>Courses</NavItem>
	      <NavItem><Icon>settings</Icon> Settings</NavItem>
	      <NavItem><Icon>star_rate</Icon>Favorite</NavItem>
      </Navbar>
      </div>
    )
  }
}

export default Nav;