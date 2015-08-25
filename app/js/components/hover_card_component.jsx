import React from "bower_components/react/react";
import _ from "underscore";

var HoverCardComponent = React.createClass({

  getInitialState () {
    return {hover: false}
  },

  handleMouseOver () {
    this.setState({hover: true})
  },

  handleMouseOut () {
    this.setState({hover: false})
  },

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render () {
    if(this.state.hover) {
      return (
        <div onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver} style={_.extend(_.clone(cardStyle), hoverStyle)}>{this.props.text}</div>
      );
    } else {
      return (
        <div onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver} style={cardStyle}>{this.props.text}</div>
      );
    }
  }

});

var hoverStyle = {
  backgroundColor: "#666",
  color: "#FFF"
};

var cardStyle = {
  backgroundColor: "#FFFFFF",
  color: "#000000",
  padding: "3px 5px",
  fontSize: "12px",
  boxSizing: "border-box"
};

export default HoverCardComponent;
