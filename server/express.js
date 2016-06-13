'use strict';

import {join} from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import routes from './routes';
import ReactEngine from 'react-engine';
import reactRoutes from '../app/scripts/routes.jsx';

let app = express();

// create the view engine with `react-engine`
let engine = ReactEngine.server.create({
  routes: reactRoutes,
  routesFilePath: join(__dirname, '../app/scripts/routes.jsx'),
  performanceCollector: function(stats) {
    console.log(stats);
  }
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', join(__dirname, '../views'));

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', ReactEngine.expressView);

// expose public folder as static assets
app.use(express.static(join(__dirname, '../public')));

// app.use(favicon(join(__dirname, '/public/favicon.ico')));
app.use(routes);

export default app;
