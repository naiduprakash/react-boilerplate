/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * import stylesheet and js dependencies
 */

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap stylesheet
import 'font-awesome/scss/font-awesome.scss'; // fontawesome styleshhet
import 'jquery/dist/jquery.min.js'; // jquery script
// -- Note -- import jquery before bootstrap script
import 'bootstrap/dist/js/bootstrap.min.js'; // bootstrap script

// import style.scss after bootstrap
import './assets/scss/styles.scss'; // global stylesshets

import Root from './routes';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
