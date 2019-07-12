import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from '../routes';

/**
 * If true the router will use full page refreshes on page navigation.
 * You probably only want this in browsers that don’t support the HTML5 history API.
 */
const supportsHistory = 'pushState' in window.history;

const RootScrren = props => {
  return (
    <Router forceRefresh={!supportsHistory}>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
};

export default RootScrren;
