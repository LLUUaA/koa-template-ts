const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin  } = require('clean-webpack-plugin');
module.exports = {
    entry: './src/app.ts',
    mode: 'development',
    target: 'node',
    devtool: 'inline-source-map',
    output:  {
        filename: 'app.js',
        path: path.resolve(__dirname, '../dist'),
    },

    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    plugins:[
        new CleanWebpackPlugin()
    ],

    resolve: {
        extensions: ['.ts', '.js' ],
      },
}