const path = require('path')
const baseConfig = require('./webpack.base.ts')
const webpackMerge = require('webpack-merge')

const mainConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'inline-source-map',
  mode: 'development'
}

module.exports = webpackMerge.merge(baseConfig, mainConfig)
