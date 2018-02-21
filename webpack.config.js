/**
 * Created by yuyongyu on 2018/1/22.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: './pages/section10-composition-vs-inheritance.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'hello react',
                filename: 'index.html',
                template: 'index-tmpl.html'
            }
        ),
        new CleanWebpackPlugin(['dist'],{
            watch: true
        })
    ]
};