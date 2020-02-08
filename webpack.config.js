const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = require('./env');

module.exports = {
  mode: env,
  target: 'web',
  entry: [
    './src/client/index.js',
    './src/styles/root-sass.scss',
  ],
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpg|pdf|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};
