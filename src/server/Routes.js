// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import BaseLayout from './components/BaseLayout';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

const Routes = (props) => (
  <Router {...props}>
    <Routes history={BrowserRouter} />,
  </Router>
);

export default Routes;