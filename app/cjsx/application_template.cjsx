React = require("react")
ExperimentStore = require("./stores/experiment_store.coffee")


module.exports = ->
  <ExperimentComponent data={ExperimentStore.getAll()} />,
  document.getElementById("root")
