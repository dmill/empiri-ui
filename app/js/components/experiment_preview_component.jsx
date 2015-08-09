import React from "react";

var ExperimentPreviewComponent = React.createClass({

  handleClick () {
    this.props.dispatcher.dispatch({
      actionType: "click.experiment-preview-component",
      experimentId: this.props.data.id
    });
  },

  render () {
    return (
      <div onClick={this.handleClick} className="experiment-preview-component">
        <section className="introduction">
          <h1>{this.props.data.title}</h1>

          <h2>{this.props.data.date}</h2>
          <p>{this.props.data.synopsis}</p>
        </section>
      </div>
    );
  }

});


export default ExperimentPreviewComponent;
