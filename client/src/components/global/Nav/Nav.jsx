import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize';

class Nav extends Component {

  render() {
    return (
      <div>

        <nav className="blue-grey darken-3" role="navigation">
          <div class="nav-wrapper container">
            <a id="logo-container" href="#"></a>
            <img src="../../../../public/landingPageImage/pic/logos/gwmfavwhite.png"></img>
            <ul class="right">
              <li><Link to="/Home/HomeView"><Icon>home</Icon></Link></li>
              <li><Link to="/Home/createDateCourse"><Icon>event_note</Icon></Link></li>
              <li><Link to="/Home/searchEvents"><Icon>search</Icon></Link></li>
              <li><Link to="/Home"><Icon>turned_in</Icon></Link></li>
              <li><Link to="/Home/editProfile"><Icon>account_circle</Icon></Link></li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}

export default Nav;