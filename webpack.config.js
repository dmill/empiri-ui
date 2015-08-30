module.exports = {
  entry: {
    main: "./app/js/application.jsx",
    test: "./__tests__/spec.js"
  },
  output: {
    path: "build",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { app: /\.jsx$/, loader: "babel-loader", query: { blacklist: ["strict"] } },
      { __tests__: /\.jsx$/, loader: "babel-loader", query: { blacklist: ["strict"] } }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  }
};
