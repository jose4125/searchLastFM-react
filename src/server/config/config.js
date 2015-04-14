var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'api'
    },
    port: 3000,
    db: 'mongodb://localhost/rkrcontacts'
  },

  test: {
    root: rootPath,
    app: {
      name: 'api'
    },
    port: 3000,
    db: 'mongodb://localhost/rkrcontacts'
  },

  production: {
    root: rootPath,
    app: {
      name: 'api'
    },
    port: 3000,
    db: 'mongodb://localhost/rkrcontacts'
  }
};

module.exports = config[env];
