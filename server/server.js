import register from 'babel-register';
register({
  presets: ['es2015', 'react'],
  plugins: ['add-module-exports']
});
import confExpress from './express';


confExpress.listen(confExpress.get('port'),() =>
  console.log('Express server listening on port ' + confExpress.get('port')));
