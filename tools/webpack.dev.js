/**
 * What need
 * - Babel loader transpiler
 * - Handle scss
 * - Clean dist
 * - Dev server
 * - Hot module replacement for react
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", 
          options: require('../babelrc.js')()
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  // finally we pass it an array of our plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple components',
      template: path.resolve(__dirname, '..', 'src', 'index.html')
    })
  ],
  // webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 1403,
    open: 'Chrome',
  }
};

module.exports = config;
