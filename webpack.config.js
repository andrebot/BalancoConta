const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/app.jsx',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'src/server/public'),
  },
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
      loader: 'stylus-loader',
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
  ],
};
