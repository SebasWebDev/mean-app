var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
console.log('dirname: ' + helpers.root('/dist'));
module.exports = webpackMerge(commonConfig, {
    devServer: {
        contentBase: helpers.root('/dist'),
        hot: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        inline: true
    }
});
// module.exports = webpackMerge(commonConfig, {
//   devtool: 'cheap-module-eval-source-map',

//   output: {
//     path: helpers.root('dist'),
//     publicPath: 'http://localhost:8080/',
//     filename: '[name].js',
//     chunkFilename: '[id].chunk.js'
//   },

//   plugins: [
//     new ExtractTextPlugin('[name].css')
//   ],

//   devServer: {
//     historyApiFallback: true,
//     stats: 'minimal'
//   }
// });
