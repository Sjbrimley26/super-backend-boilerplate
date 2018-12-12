const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

const circularPlugin = new CircularDependencyPlugin({
  // exclude detection of files based on a RegExp
  exclude: /a\.js|node_modules/,
  // add errors to webpack instead of warnings
  failOnError: true,
  // set the current working directory for displaying module paths
  cwd: process.cwd()
});

const terserPlugin = new TerserPlugin({
  cache: true,
  parallel: true
});

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  analyzerMode: "static",
  openAnalyzer: false
});

module.exports = {
  circularPlugin,
  terserPlugin,
  bundleAnalyzerPlugin
};
