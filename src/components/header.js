import React from 'react';
import { NavLink } from 'react-router-dom';
import imgLogo from '../assets/images/logo.png';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  toggleSidebar = () => {
    let { toggleDrawer } = this.props;
    toggleDrawer();
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleSidebar}
          >
            <span className="fa fa-bars" />
          </button>
          <div className="logo-wrapper-header d-block d-sm-block d-md-block d-lg-none">
            <img className="logo" src={imgLogo} alt="logo" />
          </div>

          <ul className="main-nav d-none d-sm-none d-md-none d-lg-block">
            <li className="main-nav_item">
              <NavLink to="/admin" className="main-nav_item-wrapper">
                <span className="link-icon">
                  <i className="fa fa-user" />
                </span>
                <span className="link-text">Admin</span>
              </NavLink>
            </li>
            <li className="main-nav_item">
              <NavLink to="/sop-setup" className="main-nav_item-wrapper">
                <span className="link-icon">
                  <i className="fa fa-cogs" />
                </span>
                <span className="link-text">SOP Setup</span>
              </NavLink>
            </li>
            <li className="main-nav_item">
              <NavLink to="/project-setup" className="main-nav_item-wrapper">
                <span className="link-icon">
                  <i className="fa fa-sliders" />
                </span>
                <span className="link-text">Project Setup</span>
              </NavLink>
            </li>
            <li className="main-nav_item">
              <NavLink
                to="/project-implementation"
                className="main-nav_item-wrapper"
              >
                <span className="link-icon">
                  <i className="fa fa-line-chart" />
                </span>
                <span className="link-text">Project Implementation</span>
              </NavLink>
            </li>
            <li className="main-nav_item">
              <NavLink
                to="/functional-dashboard"
                className="main-nav_item-wrapper"
              >
                <span className="link-icon">
                  <i className="fa fa-tachometer" />
                </span>
                <span className="link-text">Functional Dashboard</span>
              </NavLink>
            </li>
            <li className="main-nav_item">
              <NavLink
                to="/leadership-dashboard"
                className="main-nav_item-wrapper"
              >
                <span className="link-icon">
                  <i className="fa fa-tachometer" />
                </span>
                <span className="link-text">Leadership Dashboard</span>
              </NavLink>
            </li>
          </ul>

          <ul className="nav navbar-right nav-user-icon">
            <li className="dropdown c-pointer">
              <div
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
                  <NavLink to="/">Sign Out</NavLink>
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
