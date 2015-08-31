import React from "react";
import HoverCardComponent from "./hover_card_component";


var DropdownListComponent = React.createClass({

  displayName: "DropdownListComponent",

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  getInitialState () {
    return {hoveredCardKey: null};
  },

  handleMouseOver (key, event) {
    this.setState({hoveredCardKey: key});
  },

  handleMouseOut () {
    this.setState({hoveredCardKey: null});
  },

  getStyle (key) {
    if(key === this.state.hoveredCardKey) {
      return hoverStyle;
    } else {
      return defaultStyle;
    }
  },

  render () {
    return (
      <div style={listStyle}>
        {this.props.items.map(function(item, i) {
          return (
              <HoverCardComponent
                key={i}
                text={item}
                onMouseOver={this.handleMouseOver.bind(null, i)}
                onMouseOut={this.handleMouseOut}
                style={this.getStyle(i)} />
          );
        }.bind(this))}
      </div>
    );
  }

});

var listStyle = {
  position: "absolute",
  borderRadius: "3px",
  border: "1px solid #000000",
  backgroundColor: "#FFFFFF",
  boxSizing: "border-box"
};

var hoverStyle = {
  backgroundColor: "#666",
  color: "#FFF",
  padding: "3px 5px",
  fontSize: "12px",
  boxSizing: "border-box",
  cursor: "pointer"
};

var defaultStyle = {
  backgroundColor: "#FFFFFF",
  color: "#000000",
  padding: "3px 5px",
  fontSize: "12px",
  boxSizing: "border-box",
  cursor: "pointer"
};


export default DropdownListComponent;
