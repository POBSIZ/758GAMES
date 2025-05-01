/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const webpackConfiguration = require("../webpack.config");

module.exports = merge(webpackConfiguration, {
  mode: "production",

  /* Manage source maps generation process. Refer to https://webpack.js.org/configuration/devtool/#production */
  devtool: false,

  /* Optimization configuration */
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },

  /* Performance treshold configuration values */
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  /* Additional plugins configuration */
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public/_redirects", to: "" }],
    }),
  ],
});
