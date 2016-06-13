var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/js/index.js",
    module: {
        loaders: [
            {test: /\.s?css$/, loader: "style-loader!css-loader"},
            {test: /\.ttf$/, loader: "url-loader?limit=100000"},
            {test: /\.jpe?g$|\.png$/, loader: "file-loader"},
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
        path: "./build",
        filename: "bundle.min.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
    ]
};
