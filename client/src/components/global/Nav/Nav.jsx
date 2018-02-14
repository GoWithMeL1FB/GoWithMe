import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize';

class Nav extends Component {

  render() {
    return (
      <div>
        <Navbar brand='GO WITH ME' right href='http://localhost:3050/Home'>
          <li><Link to="/Home/HomeView"><Icon>home</Icon>Home</Link></li>
          <li><Link to="/Home/createDateCourse"><Icon>event_note</Icon>Create!</Link></li>
          <li><Link to="/Home/searchEvents"><Icon>search</Icon>Search</Link></li>
          <li><Link to="/Home/favorites"><Icon>turned_in</Icon>Favorites</Link></li>
          <li><Link to="/Home/editProfile"><Icon>account_circle</Icon>Account</Link></li>
        </Navbar>

      </div>
    )
  }
}

export default Nav;