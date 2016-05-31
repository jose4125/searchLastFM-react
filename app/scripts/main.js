import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css';
import Routes from './routes.jsx';
import ReactEngineClient from 'react-engine/lib/client';

var options = {
  routes: Routes,
  viewResolver: function(viewName) {
    console.log('viewName', viewName);
    return require('./components/' + viewName);
  }
}

document.addEventListener('DOMContentLaded', function onLoad(){
  ReactEngineClient.boot(options);
})

var hola = () => {
  console.log('main webpack');
}
hola();
