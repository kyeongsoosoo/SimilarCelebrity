const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./client/src/main.js",
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { chrome: '55' } /* chrome 55 이상으로 지정 */,
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://locallhost:3000/dist/",
    hotOnly: true,
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), 
    new HtmlWebpackPlugin({
    template: path.join(__dirname, './client/index.html'),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
    },
  }),],
};
