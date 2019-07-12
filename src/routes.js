import React from 'react';
import { Route } from 'react-router-dom';

import HomeScreen from './screens/home.screen';

const Routes = () => {
  return (
    <React.Fragment>
      <Route path="/" component={HomeScreen} />
    </React.Fragment>
  );
};

export default Routes;
