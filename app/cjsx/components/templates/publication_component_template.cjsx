React = require("react")
ExperimentsComponent = require("../experiments_component.coffee")
ExperimentStore = require("../../stores/experiment_store.coffee")

module.exports = ->
  <div className="publication-component">
    <section className="introduction">
      <h1>{@props.data.title}</h1>

      <h2>{@props.data.date}</h2>
      <p>{@props.data.synopsis}</p>
    </section>

    <section className="content">
      <ExperimentsComponent experiments={[ExperimentStore.A.getAll(), ExperimentStore.B.getAll()]} />
    </section>
  </div>
