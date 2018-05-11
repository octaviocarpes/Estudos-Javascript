const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  entry: {
    vendors: ['angular', '@uirouter/angularjs'],
    bundle: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/tmp'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    // compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};
