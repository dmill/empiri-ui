import React from "react";


var HoverCardComponent = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render () {
    var {text, ...other} = this.props;

    return (
      <div {...other}>
        {text}
      </div>
    );
  }

});


export default HoverCardComponent;
