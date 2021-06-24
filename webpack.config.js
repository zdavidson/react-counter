module.exports = {
  mode: "development",
  entry: "./client/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
          },
        },
      },
    ],
  },
};
