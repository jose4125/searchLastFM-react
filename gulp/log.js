'use strict';
module.exports = log;

var $$ = require('gulp-load-plugins')();
function log(message) {
  if (typeof (message) === 'object') {
    for (var item in message) {
      if (message.hasOwnProperty(item)) {
        $$.util.log($$.util.colors.blue(message[item]));
      }
    }
  } else {
    $$.util.log($$.util.colors.blue(message));
  }
}
