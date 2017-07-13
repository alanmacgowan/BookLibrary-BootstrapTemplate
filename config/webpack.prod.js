var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {

  // output: {
  //   path: helpers.root('dist'),
  //   publicPath: '/',
  //   filename: '[name].js',
  //   chunkFilename: '[id].chunk.js'
  // },

//   htmlLoader: {
//     minimize: false
//   },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({ 
      compress: { warnings: false }
    }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
