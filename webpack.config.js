module.exports = {
  entry: {
    main: "./app/js/application.jsx"
  },
  output: {
    path: "build",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  }
};
