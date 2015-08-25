import React from "bower_components/react/react";
import _ from "underscore";


var HoverCardComponent = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  getInitialState () {
    return {hover: false}
  },

  handleMouseOver () {
    this.setState({hover: true})
  },

  handleMouseOut () {
    this.setState({hover: false})
  },

  getHoverStyle () {
    if(this.state.hover) {
      return hoverStyle;
    } else {
      return cardStyle;
    }
  }

  render () {
    return (
      <div style={this.getHoverStyle()}
      onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver}>
        {this.props.text}
      </div>
    );
  }

});

var hoverStyle = {
  backgroundColor: "#666",
  color: "#FFF",
  padding: "3px 5px",
  fontSize: "12px",
  boxSizing: "border-box"
};

var cardStyle = {
  backgroundColor: "#FFFFFF",
  color: "#000000",
  padding: "3px 5px",
  fontSize: "12px",
  boxSizing: "border-box"
};


export default HoverCardComponent;
