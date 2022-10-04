const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');// eslint-disable-line

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
});