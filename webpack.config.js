const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    entry: {
        app: [
            '@babel/polyfill',
            './src/index.js',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'dist/',
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env']
            },
        }, {
            test: /\.css?$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        },{
            test: /\.scss?$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: isDevelopment ? { sourceMap: true } : {},
                }, {
                    loader: 'sass-loader',
                    options: isDevelopment ? { sourceMap: true } : {},
                }
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'layout'),
        port: 9000,
        open: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
};
