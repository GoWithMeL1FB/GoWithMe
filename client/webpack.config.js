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
        test: /\.scss$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader" 
          }, {
            loader: "sass-loader"
          }]  
      },
      {
        test: /\.css$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
    {
      test: /\.(png|svg|jpg|gif)$/,
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