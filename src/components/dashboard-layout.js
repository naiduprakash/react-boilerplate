import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';

const DashboardLayout = ({ component: Component, ...rest }) => {
  return (
    <main className="page-wrapper page-layout page-layout-dashboard">
      <header className="page-header">
        <Header />
      </header>
      <aside className="page-sidebar">
        <Sidebar />
      </aside>
      <article className="page-content">
        <Route {...rest} component={Component} />
      </article>
      <footer className="page-footer">
        <Footer />
      </footer>
    </main>
  );
};

export default DashboardLayout;
