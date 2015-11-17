import React from "react";

var PopoverComponent = React.createClass({

  render () {
    return (
      <div className={`popover-component props-caret-${this.props.direction}`}>
        {this.props.content}
      </div>
    );
  }

});

export default PopoverComponent;
