import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

import imgLogo from '../assets/images/logo.png';
import { getWindowDimensions } from '../helpers/window-dimensions.helper';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    let { width } = getWindowDimensions();
    this.state = {
      windowWidth: width
    };
  }

  activeSubMenu = path => {
    return this.props.location.pathname === path;
  };

  closeDrawerOnPageChange = () => {
    let { windowWidth } = this.state;
    if (windowWidth < 992) {
      this.props.toggleDrawer(false);
    }
  };

  render() {
    let { activeTopMenu } = this.props;

    return (
      <React.Fragment>
        <div className="logo-wrapper">
          <img className="logo" src={imgLogo} alt="logo" />
        </div>
        <nav className="sidebar-menu-container">
          <ul className="sidebar-menu list-unstyled">
            <li
              className={`sidebar-menu_item ${
                activeTopMenu === 'admin' ? 'active' : 'inactive'
              }`}
            >
              <a
                href="#admin-submenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle collapsed"
              >
                Admin
              </a>
              <ul
                className={`sidebar-menu inner list-unstyled collapse ${
                  activeTopMenu === 'admin' ? 'show' : ''
                } `}
                id="admin-submenu"
              >
                <li className="sidebar-menu_item">
                  <Link onClick={this.closeDrawerOnPageChange} to="#">
                    Home 1
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`sidebar-menu_item ${
                activeTopMenu === 'sop-setup' ? 'active' : 'inactive'
              }`}
            >
              <a
                href="#sop-setup-submenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle collapsed"
              >
                SOP Setup
              </a>
              <ul
                className={`sidebar-menu inner list-unstyled collapse ${
                  activeTopMenu === 'sop-setup' ? 'show' : ''
                } `}
                id="sop-setup-submenu"
              >
                <li className="sidebar-menu_item">
                  <Link onClick={this.closeDrawerOnPageChange} to="#">
                    Home 1
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`sidebar-menu_item ${
                activeTopMenu === 'project-setup' ? 'active' : 'inactive'
              }`}
            >
              <a
                href="#project-setup-submenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle collapsed"
              >
                Project Setup
              </a>
              <ul
                className={`sidebar-menu inner list-unstyled collapse ${
                  activeTopMenu === 'project-setup' ? 'show' : ''
                } `}
                id="project-setup-submenu"
              >
                <li
                  className={`sidebar-menu_item ${
                    this.activeSubMenu('/project-setup/create-project')
                      ? 'active'
                      : ''
                  }`}
                >
                  <Link
                    onClick={this.closeDrawerOnPageChange}
                    to="/project-setup/create-project"
                  >
                    Create Project
                  </Link>
                </li>

                <li
                  className={`sidebar-menu_item ${
                    this.activeSubMenu(
                      '/project-setup/update-implementation-task'
                    )
                      ? 'active'
                      : ''
                  }`}
                >
                  <Link
                    onClick={this.closeDrawerOnPageChange}
                    to="/project-setup/update-implementation-task"
                  >
                    Update Implementation Task
                  </Link>
                </li>

                <li
                  className={`sidebar-menu_item ${
                    this.activeSubMenu('/project-setup/assign-wbs')
                      ? 'active'
                      : ''
                  }`}
                >
                  <Link
                    onClick={this.closeDrawerOnPageChange}
                    to="/project-setup/assign-wbs"
                  >
                    Assign WBS
                  </Link>
                </li>
                <li
                  className={`sidebar-menu_item ${
                    this.activeSubMenu('/project-setup/ammend-wbs')
                      ? 'active'
                      : ''
                  }`}
                >
                  <Link
                    onClick={this.closeDrawerOnPageChange}
                    to="/project-setup/ammend-wbs"
                  >
                    Ammend WBS
                  </Link>
                </li>
                <li
                  className={`sidebar-menu_item ${
                    this.activeSubMenu(
                      '/project-setup/ammend-implementation-target'
                    )
                      ? 'active'
                      : ''
                  }`}
                >
                  <Link
                    onClick={this.closeDrawerOnPageChange}
                    to="/project-setup/ammend-implementation-target"
                  >
                    Ammend Implementation Target
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`sidebar-menu_item ${
                activeTopMenu === 'project-implementation'
                  ? 'active'
                  : 'inactive'
              }`}
            >
              <a
                href="#project-implementation-submenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle collapsed"
              >
                Project Implementation
              </a>
              <ul
                className={`sidebar-menu inner list-unstyled collapse ${
                  activeTopMenu === 'project-implementation' ? 'show' : ''
                } `}
                id="project-implementation-submenu"
              >
                <li className="sidebar-menu_item">
                  <Link onClick={this.closeDrawerOnPageChange} to="#">
                    Home 1
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`sidebar-menu_item ${
                activeTopMenu === 'functional-dashboard' ? 'active' : 'inactive'
              }`}
            >
              <a
                href="#functional-dashboard-submenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle collapsed"
              >
                Functional Dashboard
              </a>
              <ul
                className={`sidebar-menu inner list-unstyled collapse ${
                  activeTopMenu === 'functional-dashboard' ? 'show' : ''
                } `}
                id="functional-dashboard-submenu"
              >
                <li className="sidebar-menu_item">
                  <Link onClick={this.closeDrawerOnPageChange} to="#">
                    Home 1
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`sidebar-menu_item ${
                activeTopMenu === 'leadership-dashboard' ? 'active' : 'inactive'
              }`}
            >
              <a
                href="#leadership-dashboard-submenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle collapsed"
              >
                Leadership Dashboard
              </a>
              <ul
                className={`sidebar-menu inner list-unstyled collapse ${
                  activeTopMenu === 'leadership-dashboard' ? 'show' : ''
                } `}
                id="leadership-dashboard-submenu"
              >
                <li className="sidebar-menu_item">
                  <Link onClick={this.closeDrawerOnPageChange} to="#">
                    Home 1
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default withRouter(Sidebar);
