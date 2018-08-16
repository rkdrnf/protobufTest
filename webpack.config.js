let path = require("path");
let webpack = require("webpack");

const config = (env) => {
  return {
    entry: "./scripts/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "app.bundle.js"
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',

    devServer: {
      contentBase: [path.join(__dirname, "images"), path.join(__dirname, "views"), path.join(__dirname, "dist")],
      compress: true,
      port: 8000,
      historyApiFallback: {
        index: "index.html"
      }
    },

    // Add the loader for .ts files.
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      ]
    }
  };
}

module.exports = config;