/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-02 21:03:11
        Filename: ../react_client/webpack.production.config.js
        Description: Created by SpringHack using vim automatically.
**/
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin")
let ExtractCSS = new ExtractTextPlugin('res/css/[name].css');
let ExtractLESS = new ExtractTextPlugin('res/css/[name].css');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    main: path.resolve(__dirname, 'src/client/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'res/js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: [
          'react-hot-loader',
          'babel-loader'
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.css$/,
        use: ExtractCSS.extract(['css-loader', 'postcss-loader'])
      },
      {
        test: /\.less$/,
        use: ExtractLESS.extract(['css-loader', 'postcss-loader', {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            relativeUrls: false
          }
        }])
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/client/index.html'),
      inject: true,
      minify: {
        removeComments: true,
	    collapseWhitespace: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'res/js/vendor.js'
    }),
    ExtractLESS,
    ExtractCSS
  ]
};
