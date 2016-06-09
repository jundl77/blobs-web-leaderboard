var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "../src/js/index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: "../build",
    filename: "bundle.min.js"
  },
  plugins: [
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
