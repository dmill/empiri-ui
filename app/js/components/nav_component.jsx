import React from "bower_components/react/react";
import TooltipComponent from "./tooltip_component";

var NavComponent = React.createClass({

  render () {
    return (
      <nav style={navStyle}>
          <span style={spanStyle}><img style={logoStyle} src="./assets/images/logo.png" /></span>
          <span style={spanStyle}><input type="text" /></span>
          <span style={spanStyle}>Browse</span>
          <span style={spanStyle}><TooltipComponent style={spanStyle} text="New Publication" tooltip="new pub" /></span>
      </nav>
    );
  }

});

var navStyle = {
  boxSizing: "border-box",
  width: "100%",
  height: "50px",
  padding: "10px 40px",

  color: "#FFFFFF",
  backgroundColor: "#333333"
};

var logoStyle = {
  height: "30px"
}

var spanStyle = {
  float: "left",
  padding: "0 10px",
  lineHeight: "30px"
};

export default NavComponent;
