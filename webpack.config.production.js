'use strict'

const webpack = require('webpack')
const validate = require('webpack-validator')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = validate(merge(baseConfig, {
  devtool: 'cheap-module-source-map',

  entry: {
    app: [
      './src/index.js'
    ]
  },

  output: {
    publicPath: './dist/'
  },

  module: {
    loaders: [
      // Extract all .css to style.css as is
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'
        )
      }
    ]
  },

  plugins: [
    // https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
    // https://github.com/webpack/webpack/issues/864
    new webpack.optimize.OccurrenceOrderPlugin(),

    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    // Minify without warning messages and IE8 support
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),

    // Set the ExtractTextPlugin output filename
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
}))

