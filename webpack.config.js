const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),

  entry: {
    javascript: './js/index'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  devtool: "source-map",
  mode: 'development',
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.less$/,
        use: [
          {loader: 'css-loader'},
          {loader: 'style-loader'},
          {loader: 'less-loader'}
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: { loader: 'file-loader' }
      }
    ],
  }
};
