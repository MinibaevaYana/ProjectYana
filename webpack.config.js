const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

let mode = "development";
process.env.NODE_ENV === 'production' ? mode = 'production' : mode = 'development';

module.exports = {
    mode: mode,
    entry: {
        scripts: './src/main.js',
    },
    output: {
        filename: '[name].js',
        assetModuleFilename: '',
        clean: true,
    },
    devServer: {
        open: true,
        static: {
            directory: './src',
            watch: true
        }
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: "./src/blog.html"
        }),
        new HtmlWebpackPlugin({
            filename: 'contactUs.html',
            template: "./src/contactUs.html"
        })
    ],
    module: {
        rules: [{
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]'
                },
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'svg/[name][ext][query]'
                },
            }
        ]
    },
}