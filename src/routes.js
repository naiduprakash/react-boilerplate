import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import withLoadable from './components/with-loadable';

import DashboardLayout from './components/dashboard-layout';
import DefaultLayout from './components/default-layout';

const CreateProjectScreen = withLoadable({
  loader: () => import('./screens/create-project.screen')
});

const HomeScreen = withLoadable({
  loader: () => import('./screens/home.screen')
});

/**
 * If true the router will use full page refreshes on page navigation.
 * You probably only want this in browsers that don’t support the HTML5 history API.
 */
const supportsHistory = 'pushState' in window.history;

/**
 * activeTopMenu must be one of ( admin | sop-setup | project-setup |
 * project-implementation | functional-dashboard | leadership-dashboard )
 */

const Routes = props => {
  return (
    <Router forceRefresh={!supportsHistory}>
      <Switch>
        <Redirect exact from="/" to="/project-setup/create-project" />
        <DashboardLayout
          exact
          path="/sop-setup"
          component={CreateProjectScreen}
          activeTopMenu="sop-setup"
        />
        <DashboardLayout
          exact
          path="/project-setup"
          component={CreateProjectScreen}
          activeTopMenu="project-setup"
        />
        <DashboardLayout
          exact
          path="/project-setup/create-project"
          component={CreateProjectScreen}
          activeTopMenu="project-setup"
        />
        <DefaultLayout exact path="/login" component={HomeScreen} />
        <Route component={() => <span>Page Not Found!</span>} />
      </Switch>
    </Router>
  );
};

export default Routes;
