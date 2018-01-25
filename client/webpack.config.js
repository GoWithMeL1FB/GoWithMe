const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: '/src/index.jsx',
  output: {
    filename: '/public/bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        }
      }
    ]
  }
}

//try to fix the path to get the react page to Rende