import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, NavItem, Icon } from 'react-materialize';

class Nav extends Component {
 
  render() {
    return (
      <div>
      <Navbar brand='GO WITH ME' right href='http://localhost:3050/Home'>
        <NavItem ><Icon>account_circle</Icon> Account </NavItem>
	      <NavItem><Icon>supervisor_account</Icon> Search </NavItem>
	      <NavItem><Icon>star_rate</Icon>Favorite </NavItem>
	      <NavItem><Icon>turned_in</Icon>Courses </NavItem>
	      <NavItem><Icon>settings</Icon> Settings </NavItem>
      </Navbar>
      </div>
    )
  }
}

export default Nav;