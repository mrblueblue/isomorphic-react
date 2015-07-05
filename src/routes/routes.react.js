import React from 'react';
import { Route } from 'react-router';

import App from '../components/controller-views/App';

const routes = (
  <Route name='home' path='/' handler={App}>
  </Route>
);

export default routes;
