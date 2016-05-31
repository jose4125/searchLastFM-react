var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'app/scripts/main.js')
  },
  output: {
    path: path.resolve('./dist/'),
    filename: 'scripts/[name].js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|gulp|server)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
