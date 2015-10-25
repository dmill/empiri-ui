import React from "react";

var iconElement = React.createClass({

  getDefaultProps () {
    return {iconType: "fontawesome"};
  },

  propTypes: {
    iconName: React.PropTypes.string.isRequired,
    iconType: React.PropTypes.string
  },

  render () {
    switch(this.props.iconType) {
      case "fontawesome":
        return <i style={this.props.style} className={"fa fa-" + this.props.iconName}></i>;
      case "material":
        return <i style={this.props.style} className="material-icons">{this.props.iconName}</i>;
      default:
        return console.error("iconElement: Please specify a correct iconType.");
    }
  }

});

export default iconElement;
