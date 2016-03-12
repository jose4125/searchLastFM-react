import express from 'express';
import engine from 'react-engine';
import path from 'path';
import routes from './routes';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../webpack.config';

const APP = express();
const ENV = process.env.NODE_ENV;
const DIST = 'dist';
const DEV = 'app';
const ROOT = '/';
let staticFiles;
const PORT = process.env.PORT || 8000;

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
APP.engine('.jsx', engine.server.create());
APP.set('views', path.join(__dirname, '../views'));
APP.set('view engine', 'jsx');
APP.set('view', engine.expressView);

console.log('ENV = ', ENV);
console.log('PORT = ', PORT);

APP.use(routes);

module.exports = APP;
