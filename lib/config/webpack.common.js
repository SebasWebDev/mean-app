var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: './app/main',
    output: {
        path: helpers.root('dist'),
        filename: './js/bundle.js'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.html$/,
                use: 'html-loader',
                exclude: [helpers.root('index.html')]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                use: 'raw-loader',
                exclude: /node_modules\/@angular/
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src'), // location of your src
            {}
        ),
        new webpack.HotModuleReplacementPlugin()
    ]

    // Include polyfills or mocks for various node stuff
    // Description: Node configuration
    //
    // See: https://webpack.github.io/docs/configuration.html#node
    // node: {
    //   global: 'window',
    //   crypto: 'empty',
    //   module: false,
    //   clearImmediate: false,
    //   setImmediate: false
    // }
};
