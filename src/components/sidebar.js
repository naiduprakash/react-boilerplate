import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import imgLogo from '../assets/images/logo.png';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="logo-wrapper">
          <img className="logo" src={imgLogo} alt="logo" />
        </div>
        <nav className="sidebar-menu-container">
          <ul class="sidebar-menu list-unstyled">
            <li class="active sidebar-menu_item">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle collapsed"
              >
                Admin
              </a>
              <ul
                class="sidebar-menu inner list-unstyled collapse"
                id="homeSubmenu"
              >
                <li className="sidebar-menu_item active">
                  <NavLink href="#">Home 1</NavLink>
                </li>
                <li className="sidebar-menu_item">
                  <NavLink href="#">Home 2</NavLink>
                </li>
                <li className="sidebar-menu_item">
                  <NavLink href="#">Home 3</NavLink>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu_item">
              <NavLink href="#">SOP Setup</NavLink>
            </li>
            <li className="sidebar-menu_item">
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle collapsed"
              >
                Project Setup
              </a>
              <ul
                class="sidebar-menu inner list-unstyled collapse"
                id="pageSubmenu"
              >
                <li className="sidebar-menu_item">
                  <NavLink href="#">Page 1</NavLink>
                </li>
                <li className="sidebar-menu_item">
                  <NavLink href="#">Page 2</NavLink>
                </li>
                <li className="sidebar-menu_item">
                  <NavLink href="#">Page 3</NavLink>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu_item">
              <NavLink href="#">Project Implementation</NavLink>
            </li>
            <li className="sidebar-menu_item">
              <NavLink href="#">Functional Dashboard</NavLink>
            </li>
            <li className="sidebar-menu_item">
              <NavLink href="#">Leadership Dashboard</NavLink>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Sidebar;
