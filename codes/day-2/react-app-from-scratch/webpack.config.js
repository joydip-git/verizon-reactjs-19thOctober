const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackConfigObj = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
        app: path.resolve(__dirname, './src/App.js'),
        welcome: path.resolve(__dirname, './src/Welcome.js'),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    devServer: {
        port: 4000,
        contentBase: path.resolve(__dirname, 'build')
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'playground')
                ],
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader']
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-loader'
            }
            // {
            //     test: /\.(png|jpg)$/,
            //     use: 'file-loader'
            // }
        ]
    }
}
module.exports = webpackConfigObj;