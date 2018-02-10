const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
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
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    {
      test: /\.(png|svg|jpe?g|gif)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(woof|woff2|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }
    ]}

};

//try to fix the path to get the react page to Rende