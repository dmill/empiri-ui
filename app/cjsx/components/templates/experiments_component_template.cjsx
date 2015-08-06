React = require("react")
ExperimentComponent = require("../experiment_component.coffee")

module.exports = ->
  <div id="experiments-component">
    {@props.experiments.map((experiment) -> <ExperimentComponent data={experiment} />)}
  </div>
