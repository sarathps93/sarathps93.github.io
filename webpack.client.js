const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = require('./env');

module.exports = {
  mode: env,
  target: 'node',
  entry: './src/client/index.js',
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
      filename: env === 'production' ? 'style.[contenthash].[name].css' : '[name].css',
    }),
  ],
};
