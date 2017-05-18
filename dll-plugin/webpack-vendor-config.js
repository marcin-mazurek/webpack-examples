const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    react: ['react', 'react-dom'],
    utils: ['lodash', 'moment']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist'),
    library: '[name]_lib',
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'dist/[name]-manifest.json',
      name: '[name]_lib'
    }),
  ]
};