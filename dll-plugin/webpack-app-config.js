const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve('src'),
  entry: {
    page1: './page1.js',
    page2: './page2.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist')
  },
};