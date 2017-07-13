var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require('./helpers');

module.exports = {
//       entry: {
//     //'polyfills': './src/polyfills.ts',
//     'vendor': './scripts/vendor.js',
//     'app': './scripts/main.js'
//   }
    entry: './scripts/vendor.js'
    , output: {
        filename: 'scripts.js',
        path: helpers.root('dist')
    }
    , module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        {
            // test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            // loader: 'file?name=[name].[ext]'
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000',
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
    , plugins: [
        new CleanWebpackPlugin([helpers.root('dist')]),
    //         new webpack.optimize.CommonsChunkPlugin({
    //   name: ['app', 'vendor']//, 'polyfills']
    // }),
        new ExtractTextPlugin("styles.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
        // , new webpack.optimize.UglifyJsPlugin({
        //     compress: { warnings: false }
        // }),
        // new OptimizeCssAssetsPlugin({
        //     assetNameRegExp: /\.css$/,
        //     cssProcessorOptions: { discardComments: { removeAll: true } }
        // })
    ]
};