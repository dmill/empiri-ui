import React from "react";


var HoverCardComponent = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <div
        style={this.props.style}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
      >
        {this.props.text}
      </div>
    );
  }

});


export default HoverCardComponent;
