import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';

import { getWindowDimensions } from '../helpers/window-dimensions.helper';

class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);

    let { width } = getWindowDimensions();
    this.state = {
      isDrawerOpen: width > 991
    };
  }

  componentDidMount() {
    console.log('dashboard-layout mounting');
  }

  toggleDrawer = isDrawerOpen => {
    if (typeof isDrawerOpen === 'undefined') {
      isDrawerOpen = !this.state.isDrawerOpen;
    }
    this.setState({ isDrawerOpen: isDrawerOpen });
  };

  render() {
    let { component: Component, activeTopMenu, ...rest } = this.props;
    let { isDrawerOpen } = this.state;
    return (
      <main className="page-wrapper page-layout page-layout-dashboard">
        <div
          className={`drawer-overlay ${isDrawerOpen ? 'show-drawer' : ''}`}
          onClick={() => this.toggleDrawer(false)}
        />
        <header className={`page-header ${isDrawerOpen ? 'show-drawer' : ''}`}>
          <Header toggleDrawer={this.toggleDrawer} />
        </header>
        <aside className={`page-sidebar ${isDrawerOpen ? 'show-drawer' : ''}`}>
          <Sidebar
            toggleDrawer={this.toggleDrawer}
            activeTopMenu={activeTopMenu}
          />
        </aside>
        <article
          className={`page-content ${isDrawerOpen ? 'show-drawer' : ''}`}
        >
          <Route {...rest} component={Component} />
        </article>
        <footer className={`page-footer ${isDrawerOpen ? 'show-drawer' : ''}`}>
          <Footer />
        </footer>
      </main>
    );
  }
}

export default DashboardLayout;
