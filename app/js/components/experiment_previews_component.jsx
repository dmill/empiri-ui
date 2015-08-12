import React from "bower_components/react/react";
import ExperimentPreviewComponent from "./experiment_preview_component";

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
