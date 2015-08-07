import React from "react";
import ExperimentDispatcher from "../dispatchers/experiment_dispatcher.js";

var ExperimentComponent = React.createClass({

  handleClick () {
    ExperimentDispatcher.dispatch({
      actionType: "click.experiment-component",
      experimentId: this.props.data.id
    });
  },

  render () {
    return (
      <div onClick={this.handleClick} className="experiment-component">
        <section className="introduction">
          <h1>{this.props.data.title}</h1>

          <h2>{this.props.data.date}</h2>
          <p>{this.props.data.synopsis}</p>
        </section>

        <section className="content">
          <div className="results-container">
            <h1>Results</h1>
            <p>{this.props.data.text}</p>
          </div>

          <h2>Discussion</h2>
          <p>{this.props.data.discussion}</p>
        </section>
      </div>
    );
  }

});


export default ExperimentComponent;
