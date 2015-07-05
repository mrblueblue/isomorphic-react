import Router from 'react-router';
import React from 'react';
import express from 'express';
import Iso from 'iso';

import expressRoutes from './src/routes/routes.express';
// import reactRoutes from './src/routes/routes.react';
// import alt from './src/alt';

let port = 8080;
let ip = '127.0.0.1';
let app = express();

expressRoutes(app);

app.use((req, res) => {
  res.send('hello world');
});

app.listen(port,ip, () => {
  console.log("Go to " + ip + ":" + port)
});