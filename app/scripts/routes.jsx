import React from 'react';
import {Router, Route, IndexRoute, Redirect} from 'react-router';

import Layout from '../../views/index.jsx'
import ListPage from './components/list.jsx';

var routes = module.exports = (
  <Router>
    <Route path='/' component={Layout}>
      <IndexRoute component={ListPage} />
    </Route>
  </Router>
);
