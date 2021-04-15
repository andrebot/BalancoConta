const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client/app.jsx',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'src/server/public'),
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.m?jsx$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    }, {
      test: /\.styl$/,
      use: ['style-loader', 'css-loader', 'stylus-loader'],
    }]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          filename: 'vendor.bundle.js',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        }
      }
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [
        // { from: './src/client/assets/icon', to: 'icon'},
        { from: './src/client/assets/favicon.ico', to: 'favicon.ico'},
      ],
    }),
  ],
};
