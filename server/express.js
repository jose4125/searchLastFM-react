import express from 'express';
import ReactEngine from 'react-engine';
import path from 'path';
import routes from './routes';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../webpack.config';
import reactRoutes from '../app/scripts/routes.jsx';

const APP = express();
const ENV = process.env.NODE_ENV;
const DIST = 'dist';
const DEV = 'app';
const ROOT = '/';
let staticFiles;
const PORT = process.env.PORT || 8000;

let engine = ReactEngine.server.create({
  routes: reactRoutes,
  routesFilePath: path.join(__dirname, '../app/scripts/routes.jsx'),
  performanceCollector: function(stats) {
    console.log(stats);
  }
})

APP.set('port', PORT);
if (ENV === 'production') {
  staticFiles = DIST;
  APP.use(express.static(DIST));
}else {
  console.log('=== WEBPACK ===');
  APP.use(webpackMiddleware(webpack(config), {
    headers: {'X-Custom-Webpack-Header': 'yes'},
    stats: {colors: true}
  }));

  APP.use(webpackHotMiddleware(webpack(config), {
    log: console.log
  }));
  staticFiles = DEV;
  APP.use(express.static(DIST));
}
APP.engine('.jsx', engine);
APP.set('views', path.join(__dirname, '../views'));
APP.set('view engine', 'jsx');
APP.set('view', engine.expressView);

console.log('ENV = ', ENV);
console.log('PORT = ', PORT);

APP.use(routes);

module.exports = APP;
