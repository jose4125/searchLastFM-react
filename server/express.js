'use strict';
var express = require('express');
module.exports = function (app, dist) {
  app.use(express.static(dist));

};