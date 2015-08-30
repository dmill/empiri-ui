module.exports = {
  entry: {
    main: "./app/js/application.jsx",
    test: "./__tests__/hover_card_component_spec.jsx"
  },
  output: {
    path: "build",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { app: /\.jsx$/, loader: "babel-loader", include: "app/js" },
      { __tests__: /\.jsx$/, loaders: ["babel-loader"] }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  }
};
