var webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: "/Users/bardon/sandbox/git-projects/learn-react/ingredients/dist/assets",
        filename: "bundle.js"
    },
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    '@babel/preset-env',
                    '@babel/react'
                ]
            }
        },

        {
            test: /\.css$/,
            use: ['style-loader','css-loader', {
                loader: 'postcss-loader',
                options: {
                plugins: () => [require('autoprefixer')]
                }}]
        }
        
    ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                warnings: false,
                mangle: true // Note `mangle.properties` is `false` by default.
            }
        })]
    }
}