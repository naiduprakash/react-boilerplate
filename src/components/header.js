import React from 'react';
import { NavLink } from 'react-router-dom';
import imgLogo from '../assets/images/logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleSidebar = () => {
    let { toggleDrawer } = this.props;
    toggleDrawer();
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <button
            class="navbar-toggler"
            type="button"
            onClick={this.toggleSidebar}
          >
            <span class="fa fa-bars" />
          </button>
          <div className="logo-wrapper-header d-block d-sm-none">
            <img className="logo" src={imgLogo} alt="logo" />
          </div>

          <ul className="main-nav d-none d-sm-block">
            <li className="main-nav_item">
              <NavLink to="/admin" className="main-nav_item-wrapper">
                <span className="link-icon">
                  <i className="fa fa-user" />
                </span>
                <span className="link-text">Admin</span>
              </NavLink>
            </li>
            <li className="main-nav_item">
              <NavLink to="/admin" className="main-nav_item-wrapper">
                <span className="link-icon">
                  <i className="fa fa-user" />
                </span>
                <span className="link-text">SOP Setup</span>
              </NavLink>
            </li>
            <li className="main-nav_item">
              <NavLink to="/admin" className="main-nav_item-wrapper">
                <span className="link-icon">
                  <i className="fa fa-user" />
                </span>
                <span className="link-text">Project Setup</span>
              </NavLink>
            </li>
            <li className="main-nav_item">
              <NavLink to="/admin" className="main-nav_item-wrapper">
                <span className="link-icon">
                  <i className="fa fa-user" />
                </span>
                <span className="link-text">Project Implementation</span>
              </NavLink>
            </li>
            <li className="main-nav_item">
              <NavLink to="/admin" className="main-nav_item-wrapper">
                <span className="link-icon">
                  <i className="fa fa-user" />
                </span>
                <span className="link-text">Functional Dashboard</span>
              </NavLink>
            </li>
            <li className="main-nav_item">
              <NavLink to="/admin" className="main-nav_item-wrapper">
                <span className="link-icon">
                  <i className="fa fa-user" />
                </span>
                <span className="link-text">Leadership Dashboard</span>
              </NavLink>
            </li>
          </ul>

          <ul className="nav navbar-right nav-user-icon">
            <li className="dropdown c-pointer">
              <div
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="fa fa-user" />
              </div>
              <ul
                className="dropdown-menu"
                style={{ right: '0', left: 'auto' }}
              >
                <li>
                  <NavLink to="/admin/my-profile">My Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/admin/change-password">Change Password</NavLink>
                </li>
                <li>
                  <a href="#">Sign Out</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
