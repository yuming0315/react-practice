const path = require("path");

module.exports = function (env) {
  return {
    mode: "none",
    entry: path.resolve(`src/${env.src}/index.js`),
    output: {
      path: path.resolve("public"),
      filename: "assets/js/main.js",
      assetModuleFilename: "assets/images/[hash][ext]",
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            configFile: path.resolve("config/babel.config.json"),
          },
        },
        {
          test: /\.(c|sa|sc)ss$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
          type: "asset/resource",
        },
      ],
    },
    devServer: {
      host: "0.0.0.0",
      port: 9090,
      liveReload: true,
      compress: true,
      hot: false,
    },
  };
};
