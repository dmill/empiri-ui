React = require("react")
ExperimentStore = require("../stores/experiment_store.coffee")
_ = require("underscore")

ExperimentComponent = React.createClass
  getInitialState: ->
    _.clone(ExperimentStore.attributes)

  componentDidMount: ->
    ExperimentStore.listenTo(@, "change", @_onChange)

  componentWillUnmount: ->
    ExperimentStore.stopListening(@, "change", @_onChange)

  render: ->
    return (
      <div id="experiment-component">
        <section className="introduction">
          <h1>{@state.title}</h1>

          <h2>{@state.date}</h2>
          <p>{@state.synopsis}</p>
        </section>

        <section className="content">
          <div className="results-container">
            <h1>Results</h1>
            <p>{@state.results[0].text}</p>
          </div>

          <h2>Discussion</h2>
          <p>{@state.discussion}</p>
        </section>
      </div>
    )

  _onChange: ->
    @setState(getInitialState())

module.exports = ExperimentComponent
