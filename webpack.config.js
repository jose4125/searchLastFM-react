var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('js'),
  entry: {
    main: path.resolve(__dirname, 'app/scripts/main.js'),
    vendors: path.resolve(__dirname, './app/styles/bootswatch.styl')
  },
  output: {
    path: path.resolve('./dist/'),
    filename: 'scripts/[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'styles/vendors.css'),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|gulp|server|views)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js','.jsx']
  }
};
