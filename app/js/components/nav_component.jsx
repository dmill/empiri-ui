import React from "bower_components/react/react";
import TooltipComponent from "./tooltip_component";
import DropdownComponent from "./dropdown_component";


var NavComponent = React.createClass({

  render () {
    return (
      <nav style={navStyle} className="noselect">
          <span style={spanStyle}><img style={{height: "30px"}} src="./assets/images/logo.png" /></span>
          <span style={spanStyle}><input type="text" /></span>
          <span style={spanStyle}>Browse</span>
          <span style={spanStyle}><DropdownComponent content={dropdownContent} items={["log out", "log in", "view profile"]} /></span>
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

var spanStyle = {
  float: "left",
  padding: "0 10px",
  lineHeight: "30px"
};

var imgStyle = {
  width: "20px",
  borderRadius: "3px",
  marginTop: "5px"
};

var dropdownContent = <img style={imgStyle} src="./assets/images/avatar.jpg" />;


export default NavComponent;
