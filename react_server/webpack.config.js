/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-25 23:18:08
        Filename: webpack.config.js
        Description: Created by SpringHack using vim automatically.
**/
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './',
    port: 9090
  },
  entry: {
    main: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:9090', path.resolve(__dirname, 'src/client/main.js')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_SSR: 'false'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("./res/css/[name].css"),
    new OpenBrowserPlugin({ url: 'http://localhost:9090' })
  ]
};
