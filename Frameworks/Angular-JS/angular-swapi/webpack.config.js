const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'production',
    entry:{
        vendors: './src/vendors.js',
        app: './src/index.js',
    },
    output:{
        filename:'[name].bundle.js',
        path:__dirname + '/tmp'
    },
    devServer:{
        contentBase: path.join(__dirname, 'tmp'),
        compress:true,
        port:9000
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    })],
}