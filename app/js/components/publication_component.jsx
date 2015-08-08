import React from "react";
import ExperimentsComponent from "./experiments_component.jsx";
import ExperimentDispatcher from "../dispatchers/experiment_dispatcher.js";
import ExperimentsStore from "../stores/experiments_store.js";

var PublicationComponent = React.createClass({

  dispatchCallBack (payload) {
    switch(payload.actionType) {
      case "click.experiment-preview-component":
        this.setState({activeId: payload.experimentId});
        break;
      case "close.experiment-component":
        this.setState({activeId: null});
        break;
    };
  },

  getInitialState () {
    return {activeId: null};
  },

  componentDidMount () {
    ExperimentDispatcher.register(this.dispatchCallBack);
  },

  render () {
    return (
      <div className="publication-component">
        <section className="introduction">
          <h1>{this.props.data.title}</h1>

          <h2>{this.props.data.date}</h2>
          <p>{this.props.data.synopsis}</p>
        </section>

        <section className="content">
          <ExperimentsComponent activeId={this.state.activeId} experimentsStore={ExperimentsStore} />
        </section>
      </div>
    );
  }

});


export default PublicationComponent;
