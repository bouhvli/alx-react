const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  performance: {
    maxAssetSize: 1000000,
    hints: false,
    maxEntrypointSize: 1000000,
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks:'all',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
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
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            }
          }
        ]
      },
    ]
  }
};
