import React from "react";
import PublicationDispatcher from "../dispatchers/publication_dispatcher.js";
import ExperimentsStore from "../stores/experiments_store.js";
import ExperimentComponent from "./experiment_component.jsx";
import ExperimentPreviewsComponent from "./experiment_previews_component.jsx";

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
    PublicationDispatcher.register(this.dispatchCallBack);
  },

  getActiveComponent () {
    if(this.state.activeId) {
      return <ExperimentComponent dispatcher={PublicationDispatcher} data={this.getActiveExperiment().getAll()} />;
    } else {
      return <ExperimentPreviewsComponent dispatcher={PublicationDispatcher} experiments={ExperimentsStore.models} />;
    }
  },

  getActiveExperiment () {
    return ExperimentsStore.findWhere({id: this.state.activeId});
  },

  render () {
    return (
      <div className="publication-component">
        <section className="introduction">
          <h1>{this.props.data.title}</h1>
          <h2>{this.props.data.date}</h2>
          <p>{this.props.data.synopsis}</p>
        </section>

        <section className="experiments-container">
          {this.getActiveComponent()}
        </section>
      </div>
    );
  }

});


export default PublicationComponent;
