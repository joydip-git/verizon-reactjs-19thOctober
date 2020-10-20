const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfigObj = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
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