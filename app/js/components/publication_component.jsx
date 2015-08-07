import React from "react";
import ExperimentsComponent from "./experiments_component.jsx";
import ExperimentDispatcher from "../dispatchers/experiment_dispatcher.js";
import { ExperimentStoreA, ExperimentStoreB } from "../stores/experiment_store.js";

var PublicationComponent = React.createClass({

  dispatchCallBack (payload) {
    switch(payload.actionType) {
      case "click.experiment-component":
        this.setState({activeId: payload.experimentId});
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
          <ExperimentsComponent experiments={[ExperimentStoreA.getAll(), ExperimentStoreB.getAll()]} />
        </section>
      </div>
    );
  }

});


export default PublicationComponent;
