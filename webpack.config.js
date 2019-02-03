/*
Не лезь, оно тебя сожрет!
Палку! Палку давай!
*/

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    context: __dirname,
    entry: ['./src/js/App.js', './src/css/bundle.less'],
    output: {
        library: 'App',
        path: __dirname,
        filename: './dist/js/bundle.js'
    },
    resolve: {
        alias: {
            Source: path.resolve(__dirname, 'src/'),
        }
    },
    externals : {
        'window' : 'window'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [require('@babel/plugin-proposal-class-properties')]
                    }
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css-loader!less-loader?sourceMap")
            },
        ]
    },
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new ExtractTextPlugin({
            filename: "./dist/css/bundle.css"
        })
    ]
}