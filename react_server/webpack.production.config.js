/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-25 12:28:42
        Filename: webpack.production.config.js
        Description: Created by SpringHack using vim automatically.
**/
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/client/main.js'
  },
  output: {
    path: 'dist',
    filename: './res/js/[name].js'
  },
  resolve: {
    
  },
  module: {
    loaders: [{
      test: /\.js(x)?$/,
      loader: 'babel-loader',
      exclude: function (path) {
        return (!!path.match(/node_modules/));
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(['css', 'postcss-loader'])
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(['css', 'postcss-loader', 'less?{"relativeUrls":""}'])
    }]
  },
  postcss: function () {
    return [
      require('autoprefixer')
    ];
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      inject: true,
      minify: {
        removeComments: true,
	    collapseWhitespace: false
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
        NODE_ENV: '"production"',
        NODE_SSR: 'false'
      }
    }),
    new ExtractTextPlugin("./res/css/[name].css")
  ]
};
