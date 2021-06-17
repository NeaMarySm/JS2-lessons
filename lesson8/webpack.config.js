const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    optimization: {
        minimize: false,
    },
    entry: './script',
    output: {
        filename: './index.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}