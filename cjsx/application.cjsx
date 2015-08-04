# @cjsx React.DO

React = require("react")
console.log(process.cwd())
ExperimentComponent = require("./components/experiment_component.cjsx")

React.render(
  <h1>Hello World!</h1>
  document.getElementById("root")
)
