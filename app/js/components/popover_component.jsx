import React from "react";

var PopoverComponent = React.createClass({

  render () {
    return (
      <div className="caretUp" style={popoverStyle}>
        {this.props.content}
      </div>
    );
  }

});

var popoverStyle = {
  position: "absolute",
  border: "1px solid #eee",
  borderRadius: "2px",
  backgroundColor: "#fff",
  width: "120px",
  left: "-41px",
  padding: "5px",
  boxSizing: "border-box"
};

export default PopoverComponent;
