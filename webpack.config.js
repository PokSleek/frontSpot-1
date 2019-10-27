
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js',
        publicPath: 'dist/',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'layout'),
        compress: true,
        port: 9000,
        open: true,
    },
};