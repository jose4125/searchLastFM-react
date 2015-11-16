'use strict';

import confExpress from './express';

confExpress.listen(confExpress.get('port'),() =>
  console.log('Express server listening on port ' + confExpress.get('port')));
