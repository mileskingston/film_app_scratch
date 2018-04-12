const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const imagesDir = path.join(__dirname, './src/images');
const componentsDir = path.join(__dirname, 'src');
const helpersDir = path.join(__dirname, 'src/utils');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [componentsDir, helpersDir],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        include: imagesDir,
        use: ['babel-loader', 'svg-jsx-loader?presets[]=react']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({template: './public/index.html'})
  ]
};