React = require("react")
ExperimentComponent = require("./components/experiment_component.cjsx")
ExperimentStore = require("./stores/experiment_store.coffee")

React.render(
  <ExperimentComponent data={ExperimentStore.getAll()} />,
  document.getElementById("root")
)
