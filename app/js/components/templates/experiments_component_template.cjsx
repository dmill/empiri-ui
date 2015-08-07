React = require("react")
ExperimentComponent = require("../experiment_component.coffee")


module.exports = ->
  <div className="experiments-component">
    {
      @props.experiments.map (experiment, i) ->
        <ExperimentComponent key={i} data={experiment} />
    }
  </div>
