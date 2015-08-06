React = require("react")
ExperimentDispatcher = require("../dispatchers/experiment_dispatcher.coffee")
template = require("./templates/experiments_component_template.cjsx")


ExperimentsComponent = React.createClass
  render: template

  getInitialState: ->
    activeId: null

  dispatchCallBack: (payload) ->
    switch payload.actionType
      when "click-experiment-component"
        @setState(activeId: payload.experimentId)

  componentDidMount: ->
    ExperimentDispatcher.register(@dispatchCallBack)



module.exports = ExperimentsComponent
