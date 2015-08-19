import React from "bower_components/react/react";
import PublicationDispatcher from "../dispatchers/publication_dispatcher";
import ExperimentsStore from "../stores/experiments_store";
import ExperimentComponent from "./experiment_component";
import ExperimentPreviewsComponent from "./experiment_previews_component";

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

  getDefaultProps() {
    return {
      experiments: []
    }
  },

  getInitialState () { // smelly
    return {
      activeId: null
    };
  },

  componentDidMount () {
    PublicationDispatcher.register(this.dispatchCallBack);
  },

  getActiveComponent () {
    if(this.state.activeId) {
      return <ExperimentComponent dispatcher={PublicationDispatcher} data={this.getActiveExperiment().getAll()} />;
    } else {
      return <ExperimentPreviewsComponent dispatcher={PublicationDispatcher} experiments={this.props.experiments} />;
    }
  },

  getActiveExperiment () {
    return ExperimentsStore.findWhere({id: this.state.activeId});
  },

  render () {
    return (
      <div className="publication-component">
        <section className="experiments-container">
          {this.getActiveComponent()}
        </section>
      </div>
    );
  }

});


export default PublicationComponent;
