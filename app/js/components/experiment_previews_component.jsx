import React from "react";
import ExperimentPreviewComponent from "./experiment_preview_component.jsx";

var ExperimentPreviewsComponent = React.createClass({

  render () {
    return (
      <div className="experiment-previews-component">
        {this.props.experiments.map(function(experiment, i) {
          return <ExperimentPreviewComponent key={i} data={experiment.getAll()} />;
        })}
      </div>
    );
  }

});


export default ExperimentPreviewsComponent;
