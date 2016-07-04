'use strict';

const PORT = process.env.PORT || 3000;

import app from './express';

app.listen(PORT, function() {
  console.log('Example app listening at http://localhost:%s', PORT);
});
