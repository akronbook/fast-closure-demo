const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    "dicom-components": "./index.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Simple demo",
      hash: true,
      filename: "index.html",
      template: "../index.html.ejs",
      meta: {
      },
    })
  ],
};
