'use strict';

// import the react-router routes
import Routes from './routes.jsx';
import fetch from 'fetch-ie8';

// import the react-engine's client side booter
import ReactEngineClient from 'react-engine/lib/client';

// boot options
var options = {
  routes: Routes,

  // supply a function that can be called
  // to resolve the file that was rendered.
  // viewResolver: function(viewName) {
  //   return require('../../views/' + viewName);
  // }
};

document.addEventListener('DOMContentLoaded', () => {
  if(window.location.protocol==="https:")
    window.location.protocol="http";
  }
  // boot the app when the DOM is ready
  ReactEngineClient.boot(options);
});
