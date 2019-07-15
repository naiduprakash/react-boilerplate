import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withLoadable from './components/with-loadable';

import DashboardLayout from './components/dashboard-layout';
import DefaultLayout from './components/default-layout';

const ShowAllCountriesScreen = withLoadable({
  loader: () => import('./screens/show-all-countries.screen')
});

const HomeScreen = withLoadable({
  loader: () => import('./screens/home.screen')
});

/**
 * If true the router will use full page refreshes on page navigation.
 * You probably only want this in browsers that don’t support the HTML5 history API.
 */
const supportsHistory = 'pushState' in window.history;

const Routes = props => {
  return (
    <Router forceRefresh={!supportsHistory}>
      <Switch>
        <DashboardLayout
          exact
          path="/admin/countries"
          component={ShowAllCountriesScreen}
        />
        <DefaultLayout exact path="/login" component={HomeScreen} />
        <Route component={() => <span>Page Not Found!</span>} />
      </Switch>
    </Router>
  );
};

export default Routes;
