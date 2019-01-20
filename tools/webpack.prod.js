/**
 * Build is more simple
 * Just bundle it with
 * libraryTarget commonjs2 -- most import thing
 */
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
  entry: path.resolve(__dirname, '../src/build.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2',
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader", 
          options: require('../babelrc.js')('production')
        }
      }
    ]
  },
  // finally we pass it an array of our plugins
  plugins: [
    new CleanWebpackPlugin("dist", { root: path.resolve(__dirname, '..') }),
    new BundleAnalyzerPlugin(),
  ]
};

module.exports = config;
