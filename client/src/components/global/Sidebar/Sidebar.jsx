import React, { Component } from 'react';
import axios from 'axios';
import { SideNav, SideNavItem, Button, Col } from 'react-materialize';

class Sidebar extends Component {

  render() {
    return (
      
      <SideNav
        trigger={<Button>Account</Button>}
        options={{ closeOnClick: true }}
        className='side-nav fixed'
      >
        <SideNavItem userView
          user={{
            background: '../../temp/download.jpeg',
            image: '../../../../../fakeDatas/davidprof.jpg',
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
