/**
 * Build is more simple
 * Just bundle it with
 * libraryTarget commonjs2 -- most import thing
 */
const path = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env = {}, agr) {
  const config = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
      path: path.resolve(__dirname, '../docs'),
      filename: 'index.js'
    },

    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            envName: 'production',
            ...require('../babel.config.js')
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
    },

    
    // finally we pass it an array of our plugins
    plugins: [
      new CleanWebpackPlugin("docs", {
        root: path.resolve(__dirname, '..')
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        title: 'Docs',
        template: path.resolve(__dirname, '..', 'src', 'index.html')
      })
    ]
  }

  return config;
};
