import React, { Component } from 'react';
import axios from 'axios';
// import './Sidebar.css';

class Sidebar extends Component {

  render() {
    return (
      <div>
        
      <ul class="nav sidebar-nav">
        <li class="dropdown">
            <ul id="settings-dropdown" class="dropdown-menu">
                <li>
                    <a href="#" tabindex="-1">
                        Profile
                    </a>
                </li>
                <li>
                    <a href="#" tabindex="-1">
                        Settings
                    </a>
                </li>
                <li>
                    <a href="#" tabindex="-1">
                        Help
                    </a>
                </li>
                <li>
                    <a href="#" tabindex="-1">
                        Exit
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">
                <i class="sidebar-icon md-inbox"></i>
                Inbox
            </a>
        </li>
        <li>
            <a href="#">
                <i class="sidebar-icon md-star"></i>
                Starred
            </a>
        </li>
        <li>
            <a href="#">
                <i class="sidebar-icon md-send"></i>
                Sent Mail
            </a>
        </li>
        <li>
            <a href="#">
                <i class="sidebar-icon md-drafts"></i>
                Drafts
            </a>
        </li>
        <li class="divider"></li>
        <li class="dropdown">
            <a class="ripple-effect dropdown-toggle" href="#" data-toggle="dropdown">
                All Mail
                <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a href="#" tabindex="-1">
                        Social
                        <span class="sidebar-badge">12</span>
                    </a>
                </li>
                <li>
                    <a href="#" tabindex="-1">
                        Promo
                        <span class="sidebar-badge">0</span>
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">
                Trash
                <span class="sidebar-badge">3</span>
            </a>
        </li>
        <li>
            <a href="#">
                Spam
                <span class="sidebar-badge">456</span>
            </a>
        </li>
        <li>
            <a href="#">
                Follow Up
                <span class="sidebar-badge badge-circle">i</span>
            </a>
        </li>
    </ul>
      </div>
    )
  }
}

export default Sidebar;
