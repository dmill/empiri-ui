import React from "bower_components/react/react";

var iconStyle = {
  float: "left"
};

var FontawesomeComponent = React.createClass({

  propTypes: {
    iconName: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <i style={iconStyle} className={"fa fa-" + this.props.iconName}></i>
    );
  }

});

export default FontawesomeComponent;
