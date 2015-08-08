import React from "react";
import ExperimentDispatcher from "../dispatchers/experiment_dispatcher";
import ExperimentPreviewComponent from "./experiment_preview_component.jsx";
import ExperimentComponent from "./experiment_component.jsx"

var ExperimentsComponent = React.createClass({

  getActiveExperiment () {
    return this.props.experimentsStore.findWhere({id: this.props.activeId});
  },

  render () {
    if(this.props.activeId) {
      return (
        <div className="experiments-component">
          <ExperimentComponent data={this.getActiveExperiment().getAll()} />
        </div>
      );
    } else {
      return (
        <div className="experiments-component">
          {this.props.experimentsStore.models.map(
            function(experiment, i) {
              return <ExperimentPreviewComponent data={experiment.getAll()} key={i} />;
            }
          )}
        </div>
      );
    }
  }

});


export default ExperimentsComponent;
