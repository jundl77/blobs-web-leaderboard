var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./src/js/index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)|rankingWorker.js/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: "./src",
    filename: "bundle.min.js"
  },
  plugins: [
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"development"'
      })
  ]
};
