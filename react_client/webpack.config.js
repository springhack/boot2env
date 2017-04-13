/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-12 23:13:56
        Filename: webpack.config.js
        Description: Created by SpringHack using vim automatically.
**/
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    main: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.resolve(__dirname, 'src/client/main.js')
    ]
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
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              import: false,
              sourceMap: true
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              import: false
            }
          },
          'postcss-loader',
          {
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
      template: path.resolve(__dirname, 'src/client/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'res/js/vendor.js'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool : 'eval',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9090
  }
};
