/**
 * Created by Chris on 2017/3/24.
 * Site: www.chrisliu.top
 */
'use strict'

let webpack = require('webpack')

let WebpackDevServer = require('webpack-dev-server')
let config = require('./webpack.dev.conf.js')
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server')
let compiler = webpack(config)
let server = new WebpackDevServer(compiler, config.devServer)
server.listen(8080)
