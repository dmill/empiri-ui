React = require("react")
ExperimentDispatcher = require("../dispatchers/experiment_dispatcher.coffee")
template = require("./templates/experiment_component_template.cjsx")


ExperimentComponent = React.createClass
  render: template

  handleClick: ->
    ExperimentDispatcher.dispatch
      actionType: "click.experiment-component"
      experimentId: @props.data.id



module.exports = ExperimentComponent
