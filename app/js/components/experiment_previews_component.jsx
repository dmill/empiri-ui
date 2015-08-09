import React from "react";
import ExperimentPreviewComponent from "./experiment_preview_component.jsx";

var ExperimentPreviewsComponent = React.createClass({

  render () {
    var { experiments, ...other } = this.props;

    return (
      <div className="experiment-previews-component">
        {
          this.props.experiments.map(function(experiment, i) {
            return (
              <ExperimentPreviewComponent
                key={i} {...other} data={experiment.getAll()} />
            );
          })
        }
      </div>
    );
  }

});


export default ExperimentPreviewsComponent;
