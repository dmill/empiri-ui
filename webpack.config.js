module.exports = {
  entry: "./app/js/application.jsx",
  output: {
    filename: "./build/application.js"
  },
  module: {
    loaders: [
      { app: /\.jsx$/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  }
};
