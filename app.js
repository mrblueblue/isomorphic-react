import Router from 'react-router';
import React from 'react';
import express from 'express';
import Iso from 'iso';
import path from 'path';

import expressRoutes from './src/routes/routes.express';
import reactRoutes from './src/routes/routes.react';
import alt from './src/alt';

const port = 8080;
const ip = '127.0.0.1';
const app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));
app.use('/public', express.static(path.join(__dirname, 'public')));

expressRoutes(app);

app.use((req, res) => {
  alt.bootstrap(JSON.stringify(res.locals.data || {}));
  const iso = new Iso();
  
  Router.run(reactRoutes, req.url, (Handler) => {
    const node = React.renderToString(React.createElement(Handler));
    iso.add(node, alt.flush());
    res.render('layout', { html: iso.render() });
  });
});

app.listen(port,ip, () => {
  console.log("Go to " + ip + ":" + port)
});