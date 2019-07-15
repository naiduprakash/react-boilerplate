import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <button class="navbar-toggler" type="button">
          <span class="fa fa-bars" style={{ color: '#ffffff' }} />
        </button>

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
            <ul className="dropdown-menu" style={{ right: '0', left: 'auto' }}>
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
};

export default Header;
