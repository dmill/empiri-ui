React = require("react")
ExperimentStore = require("./stores/experiment_store.coffee")
ExperimentComponent = require("./components/experiment_component.coffee")


React.render(
  <ExperimentComponent data={ExperimentStore.getAll()} />,
  document.getElementById("root")
)
