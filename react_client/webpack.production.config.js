/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-02 18:14:41
        Filename: webpack.production.config.js
        Description: Created by SpringHack using vim automatically.
**/
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin")
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

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
          'babel-loader'
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              url: false,
              import: false,
              minimize: true
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              relativeUrls: false
            }
          }
        ])
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              url: false,
              import: false,
              minimize: true
            }
          },
          'postcss-loader'
        ])
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
    new ExtractTextPlugin('res/css/[name].css')
  ]
};
