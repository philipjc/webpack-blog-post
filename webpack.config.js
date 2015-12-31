var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(ROOT_PATH, 'app/main.js'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(ROOT_PATH, 'app')
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
        include: path.resolve(ROOT_PATH, 'app')
      }
    ]
  },

  devServer: {
    port: 4000,
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  plugins: [
    new HtmlwebpackPlugin({ title: 'webpack' }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
