import Iso from 'iso';
import Router from 'react-router';
import React from 'react';
import reactRoutes from './routes/routes.react';
import alt from './alt';

import './styles/styles.scss';

Iso.bootstrap((state, _, container) => {
  alt.bootstrap(state);

  Router.run(reactRoutes, Router.HistoryLocation, (Handler, req) => {
    const node = React.createElement(Handler);
    React.render(node, container);
  });
});
