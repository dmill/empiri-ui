React = require("react")
ExperimentStore = require("./stores/experiment_store.coffee")
ExperimentsComponent = require("./components/experiments_component.coffee")


React.render(
  <ExperimentsComponent experiments={[ExperimentStore.A.getAll(), ExperimentStore.B.getAll()]} />,
  document.getElementById("root")
)
