import React from "bower_components/react/react";


var FontawesomeComponent = React.createClass({

  propTypes: {
    iconName: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <i style={this.props.style} className={"fa fa-" + this.props.iconName}></i>
    );
  }

});


export default FontawesomeComponent;
