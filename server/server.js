'use strict';
import express from 'express';
//var express = require('express');
const APP = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV;
const DIST = 'dist';
const DEV = 'app';
const ROOT = '/';
var staticFiles;

APP.set('port', PORT);
if (ENV === 'production') {
  staticFiles = DIST;
  APP.use(express.static(DIST));
}else {
  staticFiles = DEV;
  APP.use(express.static(DEV));
}

var router = express.Router();
router.get(ROOT, (req, res) => res.sendFile(staticFiles));

APP.use(router);
console.log('ENV = ', ENV);
console.log('PORT = ', PORT);
APP.listen(APP.get('port'),() => console.log('Express server listening on port ' + APP.get('port')));
