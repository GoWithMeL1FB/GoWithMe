const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: './public/bundle.js'
  },
  watch: true
}
