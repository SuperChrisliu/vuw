'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')
const utils = require('./utils')

module.exports = merge(baseWebpackConfig, {
  devServer: {
    /**
     * Enable gzip compression for everything served
     */
    contentBase: '../dist',
    compress: true,
    headers: {
      'X-Custom-Foo': 'bar'
    },
    hot: true,
    https: false,
    inline: true,
    /**
     * If you don't want /api to be passed along, we need to rewrite the path
     */
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {'^/api': ''}
      }
    },
    publicPath: '/'
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'Vue Admin',
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: 'src/assets/logo.png'
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
})
