import React from "react";

var iconElement = React.createClass({

  propTypes: {
    iconName: React.PropTypes.string.isRequired
  },

  render () {
    return <i style={this.props.style} className={"fa fa-" + this.props.iconName}></i>;
  }

});

export default iconElement;
