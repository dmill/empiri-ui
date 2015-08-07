import React from "react";
import ExperimentDispatcher from "../dispatchers/experiment_dispatcher";
import ExperimentComponent from "./experiment_component.jsx";

var ExperimentsComponent = React.createClass({

  getInitialState () {
    return {activeId: null};
  },

  render () {
    return (
      <div className="experiments-component">
        {this.props.experiments.map(
          function(experiment, i) {
            return <ExperimentComponent data={experiment} key={i} />;
          }
        )}
      </div>
    );
  }

});


export default ExperimentsComponent;
