module.exports = {
  entry: {
    main: "./app/js/application.jsx",
    test: "./__tests__/spec_runner.js"
  },
  output: {
    path: "build",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        app: /\.jsx$/, loader: "babel-loader",
        query: { blacklist: ["strict"] },
        exclude: /node_modules/
      },
      {
        __tests__: /\.jsx$/,
        loader: "babel-loader",
        query: { blacklist: ["strict"] } ,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  }
};
