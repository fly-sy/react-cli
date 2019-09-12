const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  // mode: 'development',
  entry: path.join(__dirname, './src/index.js'),
  // entry: {
  //   index: path.join(__dirname, './src/index.js'),
  //   home: path.join(__dirname, './src/home.js')
  // },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'static/js/build.[chunkhash:5].js',
    // filename: '[name].[chunkhash:5].js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[chunkhash:5].css',
    }),
    new CleanWebpackPlugin()

  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        use: 'url-loader?limit=115293'
      },
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}