import React from 'react';
import { Route } from 'react-router-dom';

const DashboardLayout = ({ component: Component, ...rest }) => {
  return (
    <div className="page-wrapper page-layout page-layout-default">
      <Route {...rest} component={Component} />
    </div>
  );
};

export default DashboardLayout;
