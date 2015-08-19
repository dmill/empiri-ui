import React from "bower_components/react/react";
import HoverCardComponent from "./hover_card_component";

var TooltipComponent = React.createClass({

  getInitialState () {
    return {hover: false};
  },

  handleMouseOver () {
    this.setState({hover: true});
  },

  handleMouseOut () {
    this.setState({hover: false});
  },

  renderTooltip () {
    if(this.state.hover === true) {
      return <HoverCardComponent tooltip={this.props.tooltip} />;
    }
  },

  render () {
    return (
      <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        {this.props.text}
        <div style={tooltipAnchorStyle}>{this.renderTooltip()}</div>
      </div>
    );
  }

});

var tooltipAnchorStyle = {
  position: "relative"
};

export default TooltipComponent;
