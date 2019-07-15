import React from 'react';
import imgLogo from '../assets/images/logo.png';

const Sidebar = () => {
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
              Home
            </a>
            <ul
              class="sidebar-menu inner list-unstyled collapse"
              id="homeSubmenu"
            >
              <li className="sidebar-menu_item active">
                <a href="#">Home 1</a>
              </li>
              <li className="sidebar-menu_item">
                <a href="#">Home 2</a>
              </li>
              <li className="sidebar-menu_item">
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu_item">
            <a href="#">About</a>
          </li>
          <li className="sidebar-menu_item">
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle collapsed"
            >
              Pages
            </a>
            <ul
              class="sidebar-menu inner list-unstyled collapse"
              id="pageSubmenu"
            >
              <li className="sidebar-menu_item">
                <a href="#">Page 1</a>
              </li>
              <li className="sidebar-menu_item">
                <a href="#">Page 2</a>
              </li>
              <li className="sidebar-menu_item">
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu_item">
            <a href="#">Portfolio</a>
          </li>
          <li className="sidebar-menu_item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
