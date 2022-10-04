const path = require('path');
const common = require('./webpack.common.js');// eslint-disable-line
const { merge } = require('webpack-merge');// eslint-disable-line
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// eslint-disable-line

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CleanWebpackPlugin()],
});