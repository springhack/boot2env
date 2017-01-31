/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-01 02:26:55
        Filename: webpack.config.js
        Description: Created by SpringHack using vim automatically.
**/
let webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/client/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: './res/js/[name].js'
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
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            relativeUrls: false
          }
        }]
      }
    ]
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
        NODE_SSR: false
      }
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:9090' }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool : 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './dist',
    port: 9090
  }
};
