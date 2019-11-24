const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = require('./isProd');

module.export = {
  entry: './src/client/App.js',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'sass-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProd ? 'style.[contenthash].[name].css' : '[name].css',
    }),
  ],
};
