'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Layout from '../../views/index.jsx';
import ListPage from './components/list.jsx';
import DetailPage from '../../views/detail.jsx';

var routes = module.exports = (
  <Router>
    <Route path='/' component={Layout}>
      <IndexRoute component={ListPage} />
      <Route path='/genre/:id/movies' component={ListPage}/>
      <Route path='/movie/:id' component={DetailPage} />
      <Redirect from='/gohome' to='/' />
    </Route>
  </Router>
);
