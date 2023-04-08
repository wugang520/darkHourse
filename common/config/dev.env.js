'use strict'
const merge = require('webpack-merge')
//const prodEnv = require('./prod.env')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://127.0.0.1:19100"'
})
