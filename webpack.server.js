const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = require('./env');

module.exports = {
  mode: env,
  target: 'node',
  entry: './src/server/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
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
};
