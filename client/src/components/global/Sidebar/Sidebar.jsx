import React, { Component } from 'react';
import axios from 'axios';
import { SideNav, SideNavItem, Button } from 'react-materialize';

class Sidebar extends Component {

  render() {
    return (
      <SideNav
        trigger={<Button>Account</Button>}
        options={{ closeOnClick: true }}
        fixed='true'
      >
        <SideNavItem userView
          user={{
            background: '../../temp/download.jpeg',
            image: '../../temp/prof.jpg',
            name: 'David Chung',
            email: 'david@david.com'
          }}
        />
        <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
      </SideNav>
    )
  }
}

export default Sidebar;
