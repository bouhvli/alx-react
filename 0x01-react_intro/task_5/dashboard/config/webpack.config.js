const path = require('path');

module.exports = {
  devtool: "inline-source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks:'all',
    },
  },
  performance: {
    maxAssetSize: 1000000,
  },
  devServer: {
    static: path.join(__dirname, './dist'),
    open: true,
    port: 8564,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg|svg)$/i,
        type:'asset/resource',
        use: [
          {
          loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              bypassOnDebug: true,
              disable: true,
            },
          },
          'image-webpack-loader',
        ]
      },
    ]
  }
};