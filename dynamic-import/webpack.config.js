var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    root: './root.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: '[name].bundle.js',
    publicPath: 'dist/'
  },
  externals: {
    document: 'document'
  }
};

module.exports = config;
