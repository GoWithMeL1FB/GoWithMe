import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize';
import Search from '../../global/Search/Search.jsx'

class Nav extends Component {

  render() {
    return (
      <div>
        <Navbar brand='GO WITH ME' right href='http://localhost:3050/Home'>
          <li><Link to="/Home/createDateCourse"><Icon>event_note</Icon>Create!</Link></li>
          <li><Link to="/Home"><Icon>search</Icon>Search</Link></li>
          <li><Link to="/Home"><Icon>turned_in</Icon>Courses</Link></li>
          <li><Link to="/Home/editProfile"><Icon>account_circle</Icon>Account</Link></li>
        </Navbar>
      </div>
    )
  }
}

export default Nav;