const path = require("path");
const {
  terserPlugin,
  circularPlugin,
  bundleAnalyzerPlugin
} = require("./webpack-plugins");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "./"
  },

  target: "node",

  optimization: {
    minimizer: [terserPlugin]
  },

  plugins: [circularPlugin, bundleAnalyzerPlugin],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  externals: ["long", "uglify-es", "uglify-es/package.json"]
};
