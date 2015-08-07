var React = require("react")
var ExperimentsComponent = require("./experiments_component.jsx")
var ExperimentDispatcher = require("../dispatchers/experiment_dispatcher.js")
var ExperimentStore = require("../stores/experiment_store.js")

class PublicationComponent extends React.Component {
  render () {
    return (
      <div className="publication-component">
        <section className="introduction">
          <h1>{this.props.data.title}</h1>

          <h2>{this.props.data.date}</h2>
          <p>{this.props.data.synopsis}</p>
        </section>

        <section className="content">
          <ExperimentsComponent experiments={[ExperimentStore.A.getAll(), ExperimentStore.B.getAll()]} />
        </section>
      </div>
    );
  }

  getInitialState () {
    return {activeId: null}
  }

  dispatchCallBack (payload) {
    switch(payload.actionType) {
      case "click.experiment-component":
        this.setState({activeId: payload.experimentId});
        break;
    }
  }

  componentDidMount () {
    ExperimentDispatcher.register(this.dispatchCallBack);
  }

}


export default PublicationComponent
