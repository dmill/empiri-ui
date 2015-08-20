import React from "bower_components/react/react";

var HoverCardComponent = React.createClass({

  propTypes: {
    // tooltip: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <span style={tooltipStyle}>{this.props.tooltip}</span>
    );
  }

});

var tooltipStyle = {
  position: "absolute",
  borderRadius: "3px",
  border: "1px solid #000000",
  backgroundColor: "#FFFFFF",
  color: "#000000",
  padding: "5px",
  fontSize: "12px",
  boxSizing: "border-box",
  float: "left"
}

export default HoverCardComponent;
